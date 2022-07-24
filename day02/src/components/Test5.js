import React from 'react';

const Test5 = () => {
    const done1 = true
    const done2 = false
    const done3 = undefined
    return (
        <>
            <p>{done1 == true? <button>참확인</button>:<button>거짓확인</button>}</p>   
            <p>
                {done1 ? <button>참</button> : <button>거짓</button>}
            </p>
            <p>
                {done1 === false && <span>참</span>}
            </p>
            <p>
                {done3 || <span>조회된 게시물이 없습니다./</span>}
            </p>
        </>
    );
};

export default Test5;
/**
 * jsx: &&, 삼항 ***
 * ||
 */