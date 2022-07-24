import React from 'react';

const Test4Ani = ({ani, onAni}) => {
    return (
        <div>
            <h2>Ani컴포넌트</h2>
            <label>동물</label>
            <input type="text" value={ani} onChange={onAni}/>
            <span>{ani}</span>
        </div>
    );
};

export default Test4Ani;