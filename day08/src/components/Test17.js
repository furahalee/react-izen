import React, { useState } from 'react';
import {useAxios} from '../hooks/useAxios';

const Test17 = () => {
    const [text, setText] = useState('posts');
    const { data, loading, error } = useAxios(`https://jsonplaceholder.typicode.com/${text}`)
    const list = ['posts', 'albums', 'photos', 'todos']
    const onShow = (btn) => {
        setText(btn)
    }
    return (
        <div>
            <h1>{text} Data List</h1>
            <p>
                {list.map(item => <button key={item} onClick={() => onShow(item)}>{item}</button>)}
            </p>
           
            {!loading && <h2>...loading</h2>}
            <ul>
                {
                    data && data.map(item => <li key={item.id}>
                        {item.id} / {item.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test17;