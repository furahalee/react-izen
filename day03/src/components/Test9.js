import React, { useRef } from 'react';

const Test9 = () => {
    const idRef = useRef(null)
    const pwRef = useRef()
    const onShow = () => {
        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value
        }
        console.log(data)
    }
    return (
        <div>
            <input type="text" ref={idRef} />
            <input type="text" ref={pwRef} />
            <button onClick={onShow}>확인</button>
        </div>
    );
};

export default Test9;
/**
 const 이름 = useRef(null)
 const 이름 = useRef()
 const 이름 = useRef(초기값) - 유지값
 <태그 ref = {이름} />
 이름.current.style.color = xx
 이름.current.style.fontSize = xx

 useRef는 참조를 목적으로 사용되지만
 컴포넌트 렌더링에 영향을 주지 않는것을 목적으로 한다.
 함수 컴포넌트 내부 특정값을 지속적으로 참조할때 사용한다. 
 */