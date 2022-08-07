import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Counter from './components/count/Counter';

const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Counter />
      <hr/>
      <ChangeColor />
    </div>
  );
};

export default App;