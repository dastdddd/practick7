import React, { useState } from "react";
import s from "./submit.module.css";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/slices/todoSlice";

const Submit = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(value){
      dispatch(addTodos(value))
      setValue('')
    }else{
      alert('Пустой Todos')
    }
  };

  return (
    <div className={s.item}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button className={s.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Submit;
