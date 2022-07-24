import React, { useState, useEffect } from 'react';

const Test5 = () => {
    const [text, setText] = useState(5);
    const [count, setCount] = useState(1);
    const changeInput = (e) => {
        const {value} = e.target;
        setText(Number(value));
    }

    useEffect(()=> {
        console.log('useEffect')
        const timer = setInterval(()=> {
            setCount(prevCount => prevCount +text)

        }, 1000);
        return() => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    }, [text])
    return (
        <div>
            <p>
                <input type="text" value={text} onChange={changeInput} />
            </p>
            <h2>입력한 값만큼 1초마다 증가</h2>
            <h1>{count}</h1>
        </div>
    );
};

export default Test5;