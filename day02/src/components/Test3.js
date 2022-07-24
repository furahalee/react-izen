import React from 'react';

const Test3 = () => {
    /**
* 함수영역: 변수, 제어문, 조건문 모두 사용 가능하다.
* css: {}객체 - {키:값}
*/
    const title = '신상명세서'
    const name = '홍길동'
    const age = 33
    const addr = '울릉도'
    const css1 = {
        backgroundColor: 'hotpink', fontSize: 30, padding: 15, border: '1px solid #000', margin: 10
    }
    const css2 = {
        backgroundColor: 'green', borderRadius: 10
    }
    const css3 = {
        backgroundColor: 'gray'
    }
    const css4 = {
        backgroundColor: 'blue'
    }
    return (
        <div>
            <h2 style={css1}>{title}</h2>
            <h3 style={css2}>이름: {name}</h3>
            <h3 style={css3}>나이: {age}</h3>
            <h3 style={css4}>주소: {addr}</h3>
        </div>
    );
};

export default Test3;