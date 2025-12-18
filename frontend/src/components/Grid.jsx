import React from "react";
// import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify";
import { deleteUser } from "../services/users";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Tbody = styled.tbody``;

export const Th = styled.th`
  text-align: start;
  border-bottom: insent;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width: "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

async function handleDelete(id) {
  try {
    await deleteUser(id);
    toast.success("Usuário excluído");
  }
  catch (error) {
    toast.error("erro ao excluir usuário")
  }
}

function Grid({ users }) {
  return(
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Senha</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.idUsuario}>
            <Td>{user.idUsuario}</Td>
            <Td>{user.nome}</Td>
            <Td>{user.email}</Td>
            <Td onlyWeb>{user.senha}</Td>

            <Td alignCenter width="5%">
              <FaEdit/>
            </Td>

            <Td alignCenter width="5%">
              <FaTrash onClick={()=> handleDelete(user.idUsuario)}/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default Grid;