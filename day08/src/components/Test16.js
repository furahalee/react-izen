import React from 'react';
import useAxios from '../hooks/useAxios';

const Test16 = () => {
    const {data, loading, error} = useAxios('https://jsonplaceholder.typicode.com/posts')
    return (
        <div>
            <h1> post data List </h1>
            { !loading && <h2>Loading... </h2>}
            {
                data && loading && data.map( item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
            <h3>
                {error? error: null}
            </h3>            
        </div>
    );
};

export default Test16;