import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border:1px solid #000; 
    padding:25px; 
    margin: 20px auto;
    width: ${ props  => props.size };  
    h2 { font-size: 40px; }
`
const Button = styled.button`
    font-size: 50px;  margin: 5px; padding:0 30px 20px;
    cursor: pointer;
    border:none; 

    &.up::after{ content:"📤" }
    &.down::after{ content:"📥" }
    &:hover {
        background-color: tomato;
    }
    &:disabled {
        filter: grayscale(100%);
        background-color: #333;
        cursor: not-allowed;
    }
`

const Test8 = () => {
    const [ count , setCount ] = useState(1)
    const [ min , setMin ] = useState(0)
    const [ max , setMax ] = useState(10)

    const increment  = ()  => {
        setCount( count > max ? max : count +  1 )       
    }

    const decrement  = ()  => {
        setCount( count < min ? min : count -  1 )       
    }

    return (
        <Container size="300px">
            <h2>카운트: { count } </h2>
            <Button className="up" onClick={ increment } disabled={ count === max }></Button>
            <Button className='down' onClick={ decrement } disabled={ count === min }></Button>
        </Container>
    );
};

export default Test8;