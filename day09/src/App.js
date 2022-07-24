import React from 'react';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Main from './page4/Main';
import Member from './page4/Member';
import MemberDetail from './page4/MemberDetail';

const App = () => {
    return (
        <BrowserRouter>
        <>
            <Routes>
                <Route path="/" element={<Main/>} />
                {/* <Route path="/member" element={<Member/>} ></Route> */}
                <Route path="member" >
                    <Route index element={<Member/>} ></Route>
                    <Route path=":memberID" element={<MemberDetail />} />
                </Route>
                {/* <Route path="*" /> */}
            </Routes>
        </>
        </BrowserRouter>
    );
};

export default App;