import React, {useMemo, useState} from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    const [cnt, setCnt] = useState(1);
    const onUp = () => {
        setCnt(cnt + 1);
    }

    //함수에 콤포넌트에 넣는 이방식은 잘쓰이지 않으나 문법 이해를
    //돕기 위한 예시이다.
    const fun = useMemo( () => {
        return <Test2Sub cnt={cnt} />
    }, [cnt])

    return (
        <div>
            <h1>출력:{cnt}</h1>
            <button onClick={onUp}>증가</button>
            <hr />
            {
                fun
            }
        </div>
    );
};

export default Test2;