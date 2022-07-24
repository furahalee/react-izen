import React , { useReducer } from 'react';

const initialState = { color: 'hotpink' }
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return action.color;
    
        default:
            return state;
    }
}

const Test12 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 style={{color: state}}>컬러: </h1>
            <p>
                <button onClick={ () => dispatch({type: 'CHANGE_COLOR', color: 'red'}) }>red</button>
                <button onClick={ () => dispatch({type: 'CHANGE_COLOR', color: 'blue'}) }>blue</button>
                <button onClick={ () => dispatch({type: 'CHANGE_COLOR', color: 'tomato'}) }>tomato</button>
            </p>
        </div>
    );
};

export default Test12;