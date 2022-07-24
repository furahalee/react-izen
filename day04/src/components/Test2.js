import React, { useState } from 'react';
import '../assets/css/Test2.css';
import Test2Modal from './Test2Modal';

const Test2 = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const onOpen = () => {
        setIsOpen( true );
    }
    const onClose = () => {
        setIsOpen( false );
    }

    return (
        <div>
            <button onClick={ onOpen }>팝업띄우기</button>
            { isOpen && <Test2Modal onClose={onClose}/> }           
            
        </div>
    );
};

export default Test2;