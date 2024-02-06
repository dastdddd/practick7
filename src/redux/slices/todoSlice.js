import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  selectValue: "all",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newItem = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos = [newItem, ...state.todos];
    },
    changeCompleted: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    onChangeSelectValue: (state, action) => {
      state.selectValue = action.payload;
    },
    onLoadData: (state, action) => {
      state.todos = action.payload
    }
  },
});

export const { addTodos, changeCompleted, deleteItem, onChangeSelectValue, onLoadData } =
  todoSlice.actions;

export default todoSlice.reducer;
