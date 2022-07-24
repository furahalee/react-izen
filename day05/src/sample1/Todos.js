import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css';

const Todos = () => {
    const [data, setData] = useState([
        {id: 1, text: '친구만나기'},
        {id: 2, text: '회사미팅'},
    ])
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ))
    }
    const onAdd = (input) => {
        
    }
    return (
        <div className="Todos">
            <h1>할일 만들기</h1>
            <TodoForm />
            <TodoList data={data} onDel={onDel} />
        </div>
    );
};

export default Todos;