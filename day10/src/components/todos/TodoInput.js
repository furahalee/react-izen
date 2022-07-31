import React, { useRef } from "react";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
  const { changeInput, onAdd, text } = useTodos();
  const inputRef = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    inputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={inputRef} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
