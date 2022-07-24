import React, { useState } from 'react';

const Test2 = () => {
    const [ isShow, setIsShow ] = useState(false);
    const onShow = () => {
        setIsShow(true)
    }
    const onHide = () => {
        setIsShow(false)
    }
    const onToggle = () => {
        // setIsShow(
        //     isShow === false ? true : false
        // )
        setIsShow(!isShow)
    }
    return (
        <div>
            <p>
                <button onClick={ onShow }>보이기</button>
                <button onClick={ onHide }>숨기기</button>
                <button onClick={ onToggle }>
                    { isShow ? '숨기기' :  '보이기'}
                </button>
            </p>
            <hr />
            {
                isShow === true ? 
                <div style={{width: 300, height: 100, background: 'pink'}}></div>
                : null
            }
        </div>
    );
};

export default Test2;