import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const Test3 = () => {
    const [color, setColor] = useState('pink');
    const [food, setFood] = useState('');
    const onColor = (e) => {
        const {value} = e.target;
        setColor(value);
    }
    const onFood = (e) => {
        const {value} = e.target;
        setFood(value);
    }

    return (
        <div style={{margin: 40}}>
            <h2>당신이 좋아하는 색은</h2>
            <div>
                <input type="text" value={color} onChange={onColor} />
                <p>선택: pink, hotpink, blue, red, skyblue</p>
            </div>
            <hr />
            <h2>당신이 좋아하는 음식은</h2>
            <div>
                <p>
                    <input type="radio" value="갈비" name="food" onChange={onFood} />
                    <label style={{marginLeft: 10}}>갈비</label>
                
                    <input type="radio" value="불고기" name="food" onChange={onFood} />
                    <label style={{marginLeft: 10}}>불고기</label>
                
                    <input type="radio" value="김밥" name="food" onChange={onFood} />
                    <label style={{marginLeft: 10}}>김밥</label>
                    <input type="radio" value="라면" name="food" onChange={onFood} />
                    <label style={{marginLeft: 10}}>라면</label>
                </p>
            </div>
            <hr />
            <Test3Sub color={color} food={food}/>
        </div>
    );
};

export default Test3;