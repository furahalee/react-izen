import React, { useState, useEffect } from 'react';

const Test6 = () => {
    const [count, setCount] = useState(0);
    const [isActive, setActive] = useState(false);

    const onToggle = () => {
        setActive(!isActive);
    }
    const onReset = () => {
        setActive(false);
        setCount(0);
    }

    useEffect(() => {
        console.log('useEffect')
        let timer = null;
        if(isActive) {
            timer = setInterval(()=>{
                setCount(count => count+1);
            }, 1000)
        }else{
            clearInterval(timer)
        }
        return() => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    }, [isActive])

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={onToggle}>시작/중지</button>
                <button onClick={onReset}>초기화 중지</button>
            </p>
        </div>
    );
};

export default Test6;