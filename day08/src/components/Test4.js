import React, { useEffect, useState, useMemo } from 'react';

const user = [
    {id: 1, name: '김태리'},
    {id: 2, name: 'daum'},
    {id: 3, name: 'NaVer'},
    {id: 4, name: 'NATE'},
    {id: 5, name: 'GOOgle'},
    {id: 6, name: '정소민'},
    {id: 7, name: 'appLe'},
    {id: 8, name: 'netflix'},
    {id: 9, name: 'CHill'},
    {id: 10, name: '오나라'},
]

const Test4 = () => {
    const [text, setText] = useState('')
    const data = useMemo(() => {
            return user.filter(item => item.name.toUpperCase().includes(text.toUpperCase()))
    }, [text])
    // useEffect( () => {
    //     setData(user.filter(item => item.name.toUpperCase().includes(text.toUpperCase())));
    // }, [text])
    return (
        <div>
            <input type="text" value={text} 
            onChange={ e => setText(e.target.value)}/>
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;