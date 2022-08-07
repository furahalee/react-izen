import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDel, onToggle } from '../../store/modules/todos';
const TodoItem = ({ todo }) => {
    const { id , text , isChk } = todo 
    const dispatch  = useDispatch() 

    return (
        <li style={{color:isChk ? 'tomato':'#000'}}>
            <input type="checkbox" checked={isChk} onChange={() =>dispatch(onToggle(id))}/>
            {text}
            <button onClick={() =>dispatch(onDel(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;