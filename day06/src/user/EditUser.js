import React, {useEffect, useState} from 'react';

const EditUser = ({current, onUpdate, setIsEdit}) => {
    const [user, setUser ] = useState(current);
    const {name, addr}  = user

    //업데이트
    useEffect(() => {
        setUser(current);
    }, [current])

    const changeInput = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onUpdate(user)
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>연예인 명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput}  />
            </p>
            <p>
                <button type="submit">수정</button>
                <button onClick={()=>setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;