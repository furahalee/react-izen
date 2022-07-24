import React, { useState } from 'react';

const Test2 = () => {
    const [data, setData] = useState([])
    const onAdd = () => {
        setData([
            ...data,
            {
                id: data.length,
                text: '이이영' + Math.floor(Math.random()*10)
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
                    data.map(item => <li>{item.id}/{item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test2;