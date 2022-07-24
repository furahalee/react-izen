import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';

const Test2 = () => {
    const ref1 = useRef()
    const [text, setText] = useState('');

    useEffect(()=> {
        console.log('useeffect')
        ref1.current.focus();
    }, []);
    return (
        <div>
            <input type="text" ref={ref1}
            value={text} onChange={e => setText(e.target.value)} />
        </div>
    );
};

export default Test2;