import React, { Fragment } from "react";

const Test2 = () => {
  //함수영역  -모든 조건문 제어문 가능하다
  return (
    <>
      <h2>JSX영역</h2>
      <h2>한줄 이상은 영역 div처리한다, section, article, ul</h2>
      <img />
      <input />
      <br />
      <p
      //한줄 주석
      /**
       * 여러 줄 주석
       */
      >
        문단입니다.
      </p>
    </>
  );
};

export default Test2;
