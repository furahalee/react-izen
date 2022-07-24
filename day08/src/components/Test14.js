import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Test14 = () => {
    const { state, increment, decrement, reset } = useCounter(100)
    return (
        <div>
            <h2>숫자 {state}</h2>
            <p>
                <button onClick={()=> increment()}>증가</button>
                <button onClick={()=> decrement()}>감소</button>
                <button onClick={()=> reset()}>초기화</button>
            </p>
        </div>
    );
};

export default Test14;