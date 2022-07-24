import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {
    const {id, name} = item
    const css = { border: '1px solid tomato', margin: 20, padding: 15 }
    const navigate = useNavigate();
    const onGo = () => {
        const url = `/member/${id}`
        navigate(url)
    }
    return (
        <div style={css}>
            <h4>ID: {id}</h4>
            <h4>NAME: {name}</h4>
            <p><Link to={`/member/${id}`}>자세히 보기</Link> </p>
            <button onClick={onGo}>상세보기</button>
        </div>
    );
};

export default Member;