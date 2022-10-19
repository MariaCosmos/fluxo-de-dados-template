import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { useState } from "react";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const[imagem, setImagem] = useState("")

  function onChangeImagem(event){
    setImagem(event.target.value)
    console.log(event.target.value)
  }

  const[descricao, setDescricao] = useState("")
  
  function onChangeDescricao(event){
    setDescricao(event.target.value)
    console.log(event.target.value)
  }

  const[titulo, setTitulo] = useState("")
  
  function onChangeTitulo(event){
    setTitulo(event.target.value)
    console.log(event.target.value)
  }


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
            <FormularioCadastro imagem={imagem} descricao={descricao} titulo={titulo} onChangeDescricao={onChangeDescricao} onChangeImagem={onChangeImagem} onChangeTitulo={onChangeTitulo} setImagem={setImagem} setDescricao={setDescricao} />
        </aside>
        <TelaDaPostagem imagem={imagem} descricao={descricao} titulo={titulo}/>
      </Container>
    </>
  );
}

export default App;
