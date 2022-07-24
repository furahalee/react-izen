import React from 'react';

const Test9 = () => {
    const handleClick1 = () => {
        alert('test1')
    }
    const handleClick2 = () => {
        alert('test1')
    }
    const handleClick3 = () => {
        alert('test1')
    }
    const make = (num) => {
        alert(`${num}입니다.`)
    }
    const make1 = (num1, num2) => {
        alert(`두 수의 합은 ${num1+num2}입니다.`)
    }
    return (
        <div>
            <h2>이벤트 처리 연습: on+첫글자 대문자로 시작</h2>
            <p>
                <button onClick={handleClick1}>클릭</button>
                <button onClick={handleClick2}>클릭</button>
                <button onClick={handleClick3}>클릭</button>
            </p>
            <p>
                <button onClick={()=>{
                    console.log('test')
                    console.log('test')
                }}>클릭</button>
                <button onClick={()=>console.log('test')}>클릭</button>
            </p>
            <p>
                {/* 함수는 함수명()으로 하면 무조건 호출함
                값을 넘길 때 ()=>함수(값) 형식으로
                함수로 한번 묶어서 처리해줘야 한다.  */}
                <button onClick={ ()=> make(100) }>클릭</button>
                <button onClick={ ()=> make1(200, 100) }>클릭</button>
            </p>
        </div>
    );
};

export default Test9;