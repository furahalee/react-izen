import React from 'react';

const Test2 = () => {
    //함수 영역
    let name = '홍길동';
    let age = 20
    const addr = '서울'
    const tel = '010-0000-1111'
    return (
        <>
            <h2>JSX에서 자바스크립트 식 : {}</h2>
            <ul>
                <li>이름:{name} </li>
                <li>나이 : {age}</li>
                <li>주소: {addr}</li>
                <li>전화: {tel}</li>
            </ul>
        </>
    );
};

export default Test2;