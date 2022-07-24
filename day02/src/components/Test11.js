import React, { useState } from 'react';

const Test11 = () => {
    const [bgColor, setBgColor] = useState('hotpink')
    const onColor =  () => {
         bgColor=== 'hotpink'? setBgColor('skyblue'): setBgColor('hotpink') 
    }
    return (
        <>
            <h2>h1를 클릭하면 hotpink - skyblue 배경색 글자 변경하기 왕복</h2>
            <h1 style={{width: 300, height: 100, padding: 30, 
                border: '1px solid #000', margin: 20, backgroundColor: bgColor, cursor: 'pointer'}}
                onClick={onColor}
                >
                backgroundColor : {bgColor}
            </h1>
        </>
    );
};

export default Test11;