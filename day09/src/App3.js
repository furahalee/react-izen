import React from 'react';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import About from './page3/About';
import Home from './page3/Home';
import NotFiles from './page3/NotFiles';
import Profile from './page3/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li style={{marginBottom:30}}><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="about" element={<About />} />
          <Route path="profile" element={ <Profile />} >         
               <Route path=":name" />
                  {/* "profile/:name"  */}
          </Route>
         
          <Route path="*" element={ <NotFiles />} />
        </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;