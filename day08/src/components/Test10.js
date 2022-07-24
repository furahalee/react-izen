import React, { useReducer } from 'react';

const initialState = 'tomato';
//함수
const reducer = ( state, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case 'RED':
            return 'red'
        case 'GREEN':
            return 'green'
        case 'BLUE':
            return 'blue'
        case 'HOTPINK':
            return 'hotpink'
        default:
            break;
    }
}

const Test10 = () => {
    const [color, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2 style={{color: color}}>컬러{color}</h2>
            <p>
                <button onClick={()=> dispatch({type: 'RED'})}>red</button>
                <button onClick={()=> dispatch({type: 'GREEN'})}>green</button>
                <button onClick={()=> dispatch({type: 'BLUE'})}>blue</button>
                <button onClick={()=> dispatch({type: 'HOTPINK'})}>hotpink</button>
            </p>
        </div>
    );
};

export default Test10;