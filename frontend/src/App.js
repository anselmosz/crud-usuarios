import styled from "styled-components";
import GlobalStyle from "./styles/Global";
import Form from "./components/Form";
// import { toast, ToastContainer } from "react-toastify";
import Grid from "./components/Grid";
import { useState, useEffect } from "react";
import { getAllUsers } from "./services/users";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
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

      {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
      <GlobalStyle/>
    </>
  )
}

export default App
