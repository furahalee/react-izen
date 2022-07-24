import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetail = () => {
    const css = { border: '1px solid tomato', margin: 20, padding: 15 }
    const {memberID} = useParams()
    const [member, setMember] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${memberID}`
        axios.get(url)
        .then(res => setMember(res.data))
    }, [])
    const {name, email, phone, website} = member
    const navigate = useNavigate();

    const onGo = () => {
        navigate("/")
    }
    return (
        <div style={css}>
            <h2>member detail</h2>
            <ul>
                <li>id: {member.id}/ name: {name}</li>
                <li>phone: {phone}</li>
                <li>website: {website}</li>
            </ul>
            <button onClick={onGo}>목록으로</button>
        </div>
    );
};

export default MemberDetail;