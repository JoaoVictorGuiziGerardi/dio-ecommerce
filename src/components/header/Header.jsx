import React from 'react';
import Logo from '../../assets/img/logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 12vh;
    padding: 10px;

    display: flex;
    flex: 1;
    justify-content: space-around;
    align-content: center;

    box-shadow: 3px 3px 3px gray;

`;

const LogoImg = styled.img`
    max-height: 100px;
`;

const List = styled.li`
    display: flex;
    align-items: center;
`;

const ElementsList = styled.ul`
    align-self: center;
    text-align: center;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoImg src={Logo} alt="Logo da loja" />
            <List>
                <ElementsList>
                    <a href="/">Produtos</a>
                </ElementsList>
                <ElementsList>
                    <a href="/contato">Contato</a>
                </ElementsList>
                <ElementsList>
                    <a href="/carrinho">Carrinho</a>
                </ElementsList>
            </List>
        </HeaderWrapper>
    )
}

export default Header
