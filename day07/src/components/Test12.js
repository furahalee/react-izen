import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Test12 = () => {
    const [ data , setData] = useState([])
    const [loading , setLoading] = useState( false )
    const [ error , setError] = useState( null )

    useEffect( () => {
        const getData = async()  => {
            try {
                const res  = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData( res.data )
                setLoading( true )
                setError(null)
            }catch(e) {
                setError( e )
            }
            setLoading( false )
        }
        getData() 
    }, [])

    if( loading  ) return <h2>로딩중.... </h2>
    if( error  ) return <h2>에러발생.. </h2>
    if( !data ) return null 
    
    return (
        <div>
            { data.map( item => <p key={item.id}>
                { item.id} / { item.title }
            </p>)}
        </div>
    );
};

export default Test12;