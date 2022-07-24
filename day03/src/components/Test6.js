import React, { useState }  from 'react';
import '../assets/css/Test6.css'

const Test6 = () => {
    const [isColor, setIsColor] = useState(false);
    const [age, setAge] = useState(0);
    const onToggle = ()=> {
        setIsColor(!isColor)
    }
    const onAge = ()=> {
        setAge(age+1)
    }
    return (
        <div className={`wrap ${isColor ? 'pink':'tomato'}`}>
            <h2>backgroundColor :  {isColor? 'pink':'tomato'} </h2>
            <h2>나이 : {age} </h2>
            <p>
                <button onClick={onToggle}>배경바꾸기:true/false  </button>
                <button onClick={onAge}>증가</button>
                <button onClick = {()=>{setAge(age-1)}}>감소</button>
            </p>
        </div>
    );
};

export default Test6;