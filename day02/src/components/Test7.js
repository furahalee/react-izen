import React from 'react';

const Sub = (props) => {
    const {name, age} = props //비구조 할당
    return (
        <div sytle={{borderBottom: '1px solid #000', marginBottom: 15}}>
            <h2>이름: {name}/{typeof name}, 
            나이: {age}/{typeof age}</h2>
        </div>
    );
};

const Test7 = () => {
    const data1 = {name: '강아지', age: 3}
    const data2 = {name: '고양이', age: 2}
    return (
        <>
            <h2>props 설명</h2>
            <Sub name="금잔디" age="20" />
            <Sub name={"강주은"} age={24} />
            <Sub name={data1.name} age={data1.age} />
            <Sub name={data2.name} age={data2.age} />
            <Sub {...data1} />
            <Sub {...data2} />
        </>
    );
};

export default Test7;
/**
 * React 컴포넌트의 단방향 데이터 흐름
 * 
 * 부모 컴포넌트에서 자식컴포넌트에 값을 전달할 때
 * 자식에서 부모에 값을 콜백으로 전달할 때
 * 
 * <자식컴포넌트 전달자 = 값>
 * <자식컴포넌트 props명 = 전달값>
 * 전달값: 문자, 숫자, 논리값, 함수, state명, setState도 전달
 * 논리값 = {숫자}, {논리}
 * props명은 변수처럼 사용자 정의할 수 있다.
 */