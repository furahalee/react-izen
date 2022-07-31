import React from "react";
import TodoProvider from "./components/context/TodoContext";
import Todo from "./components/todos/Todo";
import Color from "./components/color/Color";
import ColorProvider from "./components/context/ColorContext";
import Count from "./components/count/Count";
import CountProvider from "./components/context/CountContext";
import ChangeColor from "./components/color/ChangeColor";
import ChangeColorProvider from "./components/context/ChangeColorContext";
import Cnt from "./components/count/Cnt";
import CntProvider from "./components/context/CntContext";
const App = () => {
  return (
    <div>
      <TodoProvider>
        <ColorProvider>
          <Todo />
          <hr />
          <Color />
        </ColorProvider>
      </TodoProvider>
      <hr />
      {/* <ColorProvider>
        <Color />
      </ColorProvider> */}
      <hr />
      <CountProvider>
        <Count />
      </CountProvider>
      <hr />
      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
      <hr />
      <CntProvider>
        <Cnt />
      </CntProvider>
    </div>
  );
};

export default App;
