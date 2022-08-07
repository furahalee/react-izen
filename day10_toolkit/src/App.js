import React from 'react';
import ChangeColor from './compontents/color/ChangeColor';
import Color from './compontents/color/Color';
import Counter from './compontents/count/Counter';
import Todos from './compontents/todos/Todos';
 
 
const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Counter />
      <hr/>
      <ChangeColor />
      <hr/>
      <Todos />
    </div>
  );
};

export default App;