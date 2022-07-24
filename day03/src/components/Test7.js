import React from 'react';

const Test7 = () => {
    const onTest = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
    }
    return (
        <div>
            <button onClick={onTest}>
                <span>안녕하세요 누르세요</span>
                <br />
                <b>오늘은 일요일입니다.</b>
            </button>
        </div>
    );
};

export default Test7;