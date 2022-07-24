import React, {useState, useEffect} from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [isShow, setIsShow] = useState(false);
    const onToggle = () => {
        setIsShow(!isShow);
    }

    return (
        <div>
            <h2>useEffect 형식4</h2>
            <p>
                <button onClick={onToggle}>보이기/숨기기</button>
            </p>
            {
                isShow &&<Test3Sub />
            }
            <hr />
            
        </div>
    );
};

export default Test3;