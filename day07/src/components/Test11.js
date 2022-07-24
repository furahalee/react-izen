import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Test11 = () => {
    const [data, setData] = useState([])
    const [ loading , setLoading ] = useState( true )
    const [ error , setError ] = useState('')

    useEffect( ()  => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => { //응답성공
                setData( res.data )
                setLoading( false )
                setError('')
             })
             .catch( error => { //실패
                setData([])
                setLoading( true )
                setError('주소를 찾을수 없습니다.')
             })
    },[])

    return (
        <div>
            {
                data && loading ? <h2>로딩중... </h2> :
                data.map( item => <p key={item.id}>
                    {item.id} / { item.title}
                </p>)
            }
            <h3>
                { error ? error : null }
            </h3>
        </div>
    );
};

export default Test11;