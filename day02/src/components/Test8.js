import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    return (
        <>
            <Test8Sub
            name="김호호"
            age={44}
            addr="서울시 서초구"
            tel="010-3444-1111"
            done= {true}
            color="hotpink"
            bgColor="blue"
            />
            <hr />
            <Test8Sub
            name="김영랑"
            addr="경기도 안산시"
            color="gray"
            bgColor="green"
            />
            <hr />
            <Test8Sub />
            <hr />
        </>
    );
};

export default Test8;