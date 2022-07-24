import React from 'react';
import styled, { css } from 'styled-components'

// ${ props  => props.props명 }
const Container  = styled.div`
    width: ${ props => props.w }; 
    margin: 10px; border:1px solid #000;padding: 20px; padding: 15px;
    background-color: ${ props  => props.bg ? props.bg:'lime'}
`
const Box  = styled.button`
    border:none;
    width: ${ props => props.width ? props.width: '110px'  };
    height:50px;
    border: 1px solid #000; margin: 5px; 
    background:${ props  => props.bgcolor ? props.bgcolor:'#333'};

    ${ props => props.mmm && css`
        background:#000; 
        width:100%;
        border:none;
        color:#fff;
        transition: 0.5s;
        &:hover {
            background:hotpink; color:#fff;
        }
    `}
`

const Test7 = () => {
    return (
        <Container w = "400px" bg="yellow" >
            <Box width="150px" bgcolor="hotpink">test</Box>
            <Box width="200px">test</Box>
            <Box width="150px" bgcolor="tomato">test</Box>
            <Box width="100px">test</Box>

            <Box mmm>test</Box>            
        </Container>
    );
};

export default Test7;