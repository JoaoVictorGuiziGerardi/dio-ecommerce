import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 10px;

  img {
    width: 250px;
    height: 300px;
  }
`;


const Card = ({ id, foto, modelo, marca, preco }) => {
  return (
    <CardWrapper id={id}>
      <img src={process.env.PUBLIC_URL+foto} alt={modelo} />
      <h3>{modelo}</h3>
      <p>{marca}</p>
      <p>R$ {preco}</p>
    </CardWrapper>
  )
}

export default Card;
