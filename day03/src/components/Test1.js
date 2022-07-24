import React from "react";

const Test1 = () => {
  const title = "신상명세서";
  const arr = ["김다미", "배두나", "남주혁", "최진혁", "송혜교"];
  const data = [
    { id: 1, name: "김다미" },
    { id: 2, name: "배두나" },
    { id: 3, name: "남주혁" },
    { id: 4, name: "최진혁" },
    { id: 5, name: "송혜교" },
  ];
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {
          arr.map((item, index) => {
            return (
              <li key={item}>
                {index}/{item}
              </li>
            );
          })
          //index: 순서가 바뀌거나 변경할 수 있다. key로 사용하지 않음.
          //index 는 단순 출력만할 때 씀. (삭제, 수정, 추가할 때 사용 X)
        }
      </ul>
      <hr />
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            {index}/{item}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              {item.id}/{item.name}
            </li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {
          data.map((item, index) => {
            return (
              <li key={item.id}>
                {item.id}/{item.name}
              </li>
            );
          })
          //고유번호 - 객체, 키
        }
      </ul>
      <ul>
          {
              data.map((item, index)=> <li key={item.id}>{item.id}/{item.name}</li>)
          }
      </ul>
    </>
  );
};

export default Test1;

/**
 * 
 key: 중복x. 유일성, 고유성 예)주민번호
 -영문, 숫자 등등 상관없지만 객체의 고유 id를 사용한다. 
 * Array.prototype.map()
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 
호출한 결과를 모아 새로운 배열을 반환합니다.

구문
arr.map(함수(현재값, 인덱스)
arr.map(function (item, index) {
    return 반환값 (), {}
})
일급 함수: 함수를 반환값 처리한다. 
arr.map((item, index) => 반환값)

매개변수
callback : 함수
currentValue : 현재 요소
index Optional : 인덱스
array Optional
map()을 호출한 배열.
thisArg Optional
callback을 실행할 때 this로 사용되는 값.
반환 값 : 새로운 배열.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
