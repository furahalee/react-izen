import React, {useState} from 'react';
import Test4Ani from './Test4Ani';
import Test4Dis from './Test4Dis';
import Test4Name from './Test4Name';

const Test4 = () => {
    const [text, setText] = useState('아무개');
    const [ani, setAni] = useState('강아지');

    const onText = (e) => {
        const { value } = e.target;
        setText( value )
    }
    const onAni = (e) => {
        const { value } = e.target;
        setAni( value )
    }
    const changeInput = (e) => {
        const { value }= e.target;
        setText( value );
    }
    return (
        <div>
            <Test4Name text={text} onText={onText} />
            <hr />
            <Test4Ani ani={ani}  onAni={onAni}/>
            <hr />
            <Test4Dis text={text} ani={ani} />
        </div>
    );
};

export default Test4;