import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import { toast, ToastContainer } from "react-toastify";
import Form from "./components/Form";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-itens: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form/>
      </Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      <GlobalStyle/>
    </>
  )
}

export default App
