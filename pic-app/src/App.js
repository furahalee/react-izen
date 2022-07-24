import React from 'react';
//import Gallery from './components/gallery/Gallery';
//import News from './components/news/News';
import GlobalStyle from './components/styled/Global';
import {Gallery, News} from './components';
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Gallery />
      {/* <News /> */}
    </>
  );
};

export default App;