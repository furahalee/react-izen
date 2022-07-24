import React, {useState} from 'react';

const Test4Name = ({text, onText}) => {
    
    return (
        <div>
            <h2>Name컴포넌트</h2>
            <label>이름:</label>
            <input type="text" value={text} onChange={onText} />
            <span style={{marginLeft:10}}>{text}</span>
        </div>
    );
};

export default Test4Name;