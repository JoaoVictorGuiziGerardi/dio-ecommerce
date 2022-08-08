import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 10px 15px;
    margin: 15px;

    display: flex;
    align-self: center;
    justify-content: center;

    :hover{
        background-color: rgba(0, 0, 0, 0.40);
        box-shadow: 1px 1px 1px gray;
    }
`;

const Button = ({ children, onClick }) => {

    return (
        <ButtonWrapper onClick = {onClick}>
            {children}
        </ButtonWrapper>
    )
}

export default Button;