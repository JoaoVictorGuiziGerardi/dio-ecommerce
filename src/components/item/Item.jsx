import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.li`
    margin: 5px;
    cursor: pointer;

    :hover{
        font-weight: bold;
    }
`;

const Item = ( {id, marca, contagem, onClick} ) => {
  return (
    <ItemWrapper key={id} onClick={onClick}>
        {marca} ({contagem})
    </ItemWrapper>
  )
}

export default Item;
