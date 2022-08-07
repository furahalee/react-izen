import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment, reset, sub } from '../../store/modules/counter';

const Counter = () => {
    const num = useSelector( state => state.countA.num )
    const dispatch  = useDispatch()

    return (
        <div>
            <h1> 카운트 : {num} </h1>
            <p>
                <button onClick={()=>dispatch(increment())}>증가</button>
                <button onClick={() => dispatch(add(10))}>10씩증가</button>
                <button onClick={() => dispatch(add(30))}>30씩증가</button>
                <button onClick={()=>dispatch(decrement())}>감소</button>
                <button onClick={()=>dispatch(sub(10))}>10감소</button>
                <button onClick={()=>dispatch(reset())}>초기화</button>
            </p>
        </div>
    );
};

export default Counter;