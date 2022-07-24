import React, { useEffect } from 'react';

const Message = ({isShow, msg, setIsShow}) => {
    useEffect(()=> {
        const timer = setTimeout(()=>{
            setIsShow(false)
        }, 2000)

        return() => {
            clearTimeout(timer)
        }
    }, [msg])
    return (
        <>
        <div className={`message ${isShow ? "on" : ""}`}>
            {msg}
        </div>
        </>
    );
};

export default Message;