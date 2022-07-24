import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no =useRef(1)
    const [data, setData] = useState([])
    const names = '이히연, 김희수, 이영이, 이영자, 김태현, 박보미, 옥하하, 시영영,아연연, 개루루'.split(',');
    const onAdd = () => {
        // const ran = names의 개수에서 랜덤으로 처리
        //text: names를 배열처리해서 ran 값으로 나오게
        const ran = Math.floor(Math.random() *names.length)
        setData([
            ...data,
            {
                id: no.current++,
                text: names[ran]
            }
        ])
    }
    return (
        <div>
            <h2>테이터 추가</h2>
            <button onClick={ onAdd }>추가</button>
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test3;