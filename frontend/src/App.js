import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import Grid from "./components/Grid";
import { useState, useEffect } from "react";
import { getAllUsers } from "./services/users";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  // const [onEdit, setOnEdit] = useState(null);

  // const notification = toast("teste")

  const loadUserData = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form/>
        <Grid users={users}/>
      </Container>

      <ToastContainer position="bottom-right" />
      <GlobalStyle/>
    </>
  )
}

export default App
