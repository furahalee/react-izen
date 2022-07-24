import React from 'react';
import './TodoForm.css';
const TodoForm = () => {
    return (
        <form className="TodoForm">
            <input type="text" placeholder="할 일을 입력하세요." />
            <button>추가</button>
        </form>
    );
};

export default TodoForm;