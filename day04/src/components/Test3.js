import React, { useState } from 'react';

const Name = () => {
    const [text, setText] = useState('');
    const changeInput = (e) => {
        const { value }= e.target;
        setText( value );
    }
    return (
        <div>
            <h2>Name컴포넌트</h2>
            <label>이름:</label>
            <input type="text" value={text} onChange={ changeInput } />
            <span style={{marginLeft:10}}>xxx</span>
        </div>
    );
};

const Animal = ({ani,  changeInput }) => {
    return (
        <div>
            <h2>Animal컴포넌트</h2>
            <label>동물:</label>
            <input type="text" value={ani} onChange={changeInput} />
            <span style={{marginLeft:10}}>{ani}</span>
        </div>
    );
};

const Display = ({ani}) => {
    return (
        <div>
            <h2>Display컴포넌트</h2>
            <h1>내가 좋아하는 동물은 {ani}입니다.</h1>
        </div>
    );
};

const Test3 = () => {
    const [ ani, setAni ] = useState('강아지');
    const changeInput = (e) => {
        const { value } = e.target;
        setAni(value);
    }
    return (
        <div>
            <Name />
            <hr />
            <Animal ani={ani} changeInput={changeInput} />
            <hr />
            <Display ani={ani} changeInput={changeInput} />
        </div>
    );
};

export default Test3;