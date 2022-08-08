import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Item } from '../../components';
import produtos from '../../services/produtos';

const HomeWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
`;

const DivFiltros = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 15px;
    padding: 15px;

    max-width: 15vw;
    background-color: rgba(220, 220, 220, 0.7);
    border: 1px solid silver;
    box-shadow: 2px 2px 2px gray;
    border-radius: 5px;
`;

const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 15px;
    padding: 15px;

    max-width: 70vw;
    background-color: rgba(220, 220, 220, 0.7);
    border: 1px solid silver;
    box-shadow: 2px 2px 2px gray;
    border-radius: 5px;
`;

const DivProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-around;
    margin: 15px;
    padding: 15px;
    
`;

const Home = () => {

  const [filtro, setFiltro] = useState('Todos');
  const [produtosExibidos, setProdutosExibidos] = useState(produtos);

  useEffect(() => {
    if (filtro === "Todos"){
      setProdutosExibidos(produtos);
    } else {
      const retornaElementoFiltrado = (value) => {
      if (value.marca.includes(filtro))
        return value;
      }
    
      setProdutosExibidos(produtos.filter(retornaElementoFiltrado));
    }

  }, [setFiltro, filtro]);


  const marcas = [];
  produtos.map((item) => {
    if (!marcas.includes(item.marca)){
      marcas.push(item.marca);
    }
  })
  
  const contagem = {};
  produtos.map((item) => {
    let key = item.marca;
    contagem[key] = (contagem[key] ? contagem[key] + 1 : 1);
  })

  return (
    <HomeWrapper>
      <DivFiltros>
        <h2>Marcas</h2>
        <ul>
          {marcas.map((marca, i) => {
            return (
              <Item key={i} id={i} marca={marca} contagem={contagem[marca]} onClick={() => {setFiltro(marca)}}/>
            )
          })}
          <Item key={Object.keys(produtos).length + 1} id={Object.keys(produtos).length + 1} marca="Todos" contagem={Object.keys(produtos).length} onClick={() => {setFiltro("Todos")}}/>
        </ul>
      </DivFiltros>
      <ContainerProdutos>
        <h2>Produtos</h2>
        
        <DivProdutos>
          {produtosExibidos.map((item) => {
            return (
              <Card {...item} key={item.id}></Card>
            )
          })}
        </DivProdutos>

      </ContainerProdutos>
    </HomeWrapper>
  )
}

export default Home;
