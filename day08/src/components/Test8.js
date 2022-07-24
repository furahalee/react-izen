import React, {useReducer} from 'react';

const initialState = 0;

//함수안에 분기형 switch ~ case 반드시 default 있어야 함
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}
const Test8 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>카운트 : {count}</h2>
            <button onClick={ () => dispatch({type: 'INCREMENT'}) }>증가</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>감소</button>
            <button onClick={() => dispatch({type: 'RESET'})}>초기화</button>
        </div>
    );
};

export default Test8;
/**
 * 별명: 분기형? 대문자로 작성한다. : type필수
 * 증가: INCREMENT
 * 감소: DECREMENT
 * 초기화: RESET
 */