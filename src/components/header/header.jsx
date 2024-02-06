import React from "react";
import s from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { onChangeSelectValue } from "../../redux/slices/todoSlice";

const Header = () => {
  const { selectValue } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <h1>Count todos:</h1>
      <select
        className={s.select}
        onChange={(e) => dispatch(onChangeSelectValue(e.target.value))}
        value={selectValue}
        name=""
        id=""
      >
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="not-done">not-done</option>
      </select>
    </div>
  );
};

export default Header;
