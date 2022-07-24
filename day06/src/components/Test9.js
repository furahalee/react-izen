import React, { useEffect, useState } from 'react';

const Test9 = () => {
    const [count, setCount] = useState(
        () => JSON.parse(localStorage.getItem('count')) || 0
        //1
    );

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('count')))
        localStorage.setItem("count", JSON.stringify(count));
    }, [count])

    // useEffect(() => {
    //     const cnt = JSON.parse(localStorage.getItem('count'));
    //     if(cnt) {
    //         setCount(cnt => cnt);
    //     }
    // }, [])

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const onDel = () => {
        localStorage.removeItem('count')
    }
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={onDel}>삭제</button>
            </p>
        </div>
    );
};

export default Test9;