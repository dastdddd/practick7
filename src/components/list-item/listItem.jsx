import React from "react";
import s from "./listItem.module.css";
import { useDispatch } from "react-redux";
import { changeCompleted, deleteItem } from "../../redux/slices/todoSlice";




const ListItem = ({ id, title, completed, index }) => {
  const dispatch = useDispatch();

  const style = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? '#413d3d' : '#000'
  }

  return (
    <div className={s.item}>
      <div className={s.span}>
        <input
          onClick={() => dispatch(changeCompleted(id))}
          type="checkbox"
          defaultChecked={completed}
        />
        <span style={style}>
          {index + 1} {title}
        </span>
      </div>
      <div className={s.button}>
        <button disabled={!completed} onClick={() => dispatch(deleteItem(id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
