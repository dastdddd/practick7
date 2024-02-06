import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import { todosApi } from "../http/http";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    todos: todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
