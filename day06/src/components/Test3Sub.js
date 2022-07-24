import React, { useEffect, useState } from 'react';

const Test3Sub = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const onMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=> {
        console.log('useEffect')
        window.addEventListener('mousemove', onMove);
        return() => {
            console.log('뒷정리')
        }
    },[])

    return (
        <div>
            <h2>마우스좌표</h2>
            <div style={{border: '1px solid #000', width: 300, padding: 40, margin:15}}>
                <h3>x축: {x}, y축: {y}</h3>
            </div>
        </div>
    );
};

export default Test3Sub;