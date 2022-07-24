import React, { Fragment } from 'react';

const Test1 = () => {
    return (
        <>
            <h1>JSX 영역: Javascript를 확장한 문법</h1>
            {/* 컴포넌트명은 반드시 첫글자가 대문자 이어야한다. (예전방식)*/}
            <h4>한 줄 이상은 div, section, article, tr, td</h4>
            <h4>빈태그 반드시 맨 뒤에 /</h4>
            <img />
            <input />
            <hr />
            {/* 주석, 설명 */}
            <div
            //한줄주석
            /**
             * 여러 줄 주석
             */
            >
                입력내용
            </div>
        </>
    );
};

export default Test1;