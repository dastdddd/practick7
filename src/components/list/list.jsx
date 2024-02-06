import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../list-item/listItem";
import s from "./list.module.css";
import { onLoadData } from "../../redux/slices/todoSlice";
import { useGetTodosQuery } from "../../http/http";

const List = () => {
  const { todos, selectValue } = useSelector((state) => state.todos);
  const { data: dataTodos, error: isError, isLoading } = useGetTodosQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataTodos) {
      dispatch(onLoadData(dataTodos));
    }
  }, [dataTodos, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  const activeTodos = todos.filter((item) => item.completed === true);
  const notActiveTodos = todos.filter((item) => item.completed === false);
  const filterTodos = [...notActiveTodos, ...activeTodos];

  return (
    <div className={s.item}>
      {filterTodos &&
        filterTodos
          .filter((item) => {
            if (selectValue === "all") {
              return true;
            } else if (selectValue === "done") {
              return item.completed;
            } else if (selectValue === "not-done") {
              return !item.completed;
            }
          })
          .map((item, index) => (
            <ListItem key={item.id} index={index} {...item} />
          ))}
    </div>
  );
};

export default List;
