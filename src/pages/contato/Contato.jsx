import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Mensagem } from '../../components';

const ContatoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormContato = styled.div`
    justify-content: center;
    flex: 1;

    input, textarea{
      border-radius: 5px;
      padding: 5px;
    }

    input:focus, textarea:focus{
      outline: none;
      box-shadow: 3px 3px 3px gray;
    }
`;

const CamposWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin: 15px;
    width: 50vw;

    label {
      margin-bottom: 5px;
    }

    input, textarea {
      background-color: whitesmoke;
    }
`;

const MsgErro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
      margin: 2px 2px;
      background-color: transparent;
      color: red;
      width: 5vw;
      padding: 3px;
    }

    button:hover{
      background-color: red;
      color: white;
    }
`;

const Contato = () => {
  const url = 'http://localhost:5000/messages';
  const [validador, setValidador] = useState(false);
  const [autor, setAutor] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setMensagens(data);
    }
    fetchData();
  }, [])

  const enviarMensagem = () => {
    setValidador(false);

    if (autor.length <= 0 || conteudo.length <= 0){
      setValidador(!validador);
    }
    
    setAutor('');
    setConteudo('');

    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
  }

  const fecharMensagem = () => {
    setValidador(false);
  }

  return (
    <ContatoWrapper>
      <div>
        <h2>Entre em contato conosco!</h2>
      </div>

      <FormContato>
        <CamposWrapper>
          <label htmlFor="nome"> Nome </label>
          <input id='nome' name='nome' type="text" onChange={(event) => {setAutor(event.target.value)}}/>
        </CamposWrapper>
        <CamposWrapper>
          <label htmlFor="mensagem"> Mensagem </label>
          <textarea name="mensagem" id="mensagem" onChange={(event) => {setConteudo(event.target.value)}} cols="30" rows="10" placeholder='Digite sua Mensagem!'></textarea>
        </CamposWrapper>
        
        {validador &&
          <MsgErro>
            <strong>Preencha todos os campos!</strong>
            <Button onClick={fecharMensagem}> <strong>X</strong> </Button>
          </MsgErro>
        }

        <CamposWrapper>
          <Button onClick={enviarMensagem}>Enviar</Button>
        </CamposWrapper>
        
      </FormContato>

      {mensagens.map((item) => {
        return(
          <Mensagem
            key={item.uuid}
            autor={item.autor}
            data={item.datamensagem}
            mensagem={item.mensagem}
          />
        )
      })}

    </ContatoWrapper>
  )
}

export default Contato;
