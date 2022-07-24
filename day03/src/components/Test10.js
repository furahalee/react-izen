import React, { useRef } from 'react';
//수업용. 잘 사용 x
const Test10 = () => {
    const colorRef = useRef(null)
    const onView = () => {
        const data = {
            color: colorRef.current.value
        }
        console.log(data)
    }
    return (
        <div>
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="hotpink">hotpink</option>
            </select>
            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test10;