import React from 'react';

const Test7Count = ({text, count}) => {
    console.log(text, count)
    return (
        <div>
            <h3>{text} / {count}</h3>
        </div>
    );
};

export default React.memo(Test7Count);