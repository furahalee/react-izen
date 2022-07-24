import React, { useRef, useState } from 'react';

const Test5 = () => {
    const [ form, setForm ] = useState({
        userid: '',
        userpw: '',
        useremail: '',
    })
    const {userid, userpw, useremail} = form;
    //form.userid, form['userid']

    const idRef = useRef();

    const changeInput = (e) => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    // const changeInput2 = (e) => {
    //     const {value, name} = e.target;
    //     setForm({
    //         ...form,
    //         [name]: value
    //     })
    // }
    // const changeInput3 = (e) => {
    //     const {value, name} = e.target;
    //     setForm({
    //         ...form,
    //         [name]: value
    //         //['useremail']: value
    //     })
    // }
    const onReset = () => {
        setForm({
            userid: '',
            userpw: '',
            useremail: ''
        })
        idRef.current.focus();
    }

    return (
        <>
            <input type="text" value={userid} name="userid" onChange={changeInput} ref={idRef}/>
            <input type="text" value={userpw} name="userpw"  onChange={changeInput}/>
            <input type="text" value={useremail} name='useremail'  onChange={changeInput}/>
            <button onClick={onReset}>초기화</button>
            <hr />
            <h3>아이디: {userid}</h3>
            <h3>비번: {userpw}</h3>
            <h3>이메일:{useremail} </h3>
        </>
    );
};

export default Test5;