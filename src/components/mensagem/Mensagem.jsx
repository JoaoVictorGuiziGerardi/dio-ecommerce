import React from 'react'
import styled from 'styled-components';

const MsgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 15px;
    padding: 15px;
    min-width: 70vw;
    
    background-color: rgba(220, 220, 220, 0.7);
    border: 1px solid silver;
    box-shadow: 2px 2px 2px gray;
    border-radius: 5px;

    div{
        border-bottom: 1px solid gray;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div p{
        color: rgba(0, 0, 0, 0.5);
    }
`;

const Mensagem = ({ autor, data, mensagem }) => {
    let dataFormatada = data.split('T');

    return (
        <MsgWrapper>
            <div>
                <h4> {autor} </h4>
                <p> {dataFormatada[0]} </p>
            </div>
            <p> {mensagem} </p>
        </MsgWrapper>
    )
}

export default Mensagem;
