import React, { createContext, useContext, useState, useRef } from "react";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const no = useRef(6);
  const [todos, setTodos] = useState([
    { id: 1, text: "정소민", isChk: false },
    { id: 2, text: "이재욱", isChk: false },
    { id: 3, text: "이나라", isChk: false },
    { id: 4, text: "김민", isChk: true },
    { id: 5, text: "유유", isChk: false },
  ]);

  const [text, setText] = useState("");

  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isChk: !item.isChk } : item
      )
    );
  };

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text: text,
        isChk: false,
      },
    ]);
    setText("");
  };

  //글자변경
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <TodoContext.Provider
      value={{ todos, onDel, onToggle, changeInput, onAdd, text }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
