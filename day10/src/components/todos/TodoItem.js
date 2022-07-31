import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ item }) => {
  const { onDel, onToggle } = useTodos();
  const { id, text, isChk } = item;
  return (
    <li style={{ color: isChk ? "red" : "#000" }}>
      <input checked={isChk} onChange={() => onToggle(id)} type="checkbox" />
      {text}
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
