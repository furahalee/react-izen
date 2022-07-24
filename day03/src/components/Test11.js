import React, { useState } from 'react';

const Test11 = () => {
    const [color, setColor] = useState('blue')
    const [text, setText] = useState('pink')
    const changeColor = (e) => {
        const {value} = e.target;
        setText(value);
    }
    const onView = () => {
        setColor(text)
    }
    return (
        <div>
            <h2 style={{color: `${color}`}}>컬러 바꾸기</h2>
             <select onChange={changeColor} value={text}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="hotpink">hotpink</option>
            </select>
            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test11;