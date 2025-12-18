import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../services/users";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;
  
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: auto;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;  
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    await createUser(form);
    toast.success("Usuário criado");
    setForm({nome: "", email: "", senha: ""})
  }
  catch (error) {
    toast.error("Falha ao criar usuário")
  }
}

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input 
          name="nome"
          value={form.nome}
          onChange={handleChange}/>
      </InputArea>

      <InputArea>
        <Label>Email</Label>
        <Input 
          name="email"
          value={form.email}
          onChange={handleChange}/>
      </InputArea>

      <InputArea>
        <Label>Senha</Label>
        <Input 
          name="senha"
          value={form.senha}
          onChange={handleChange}/>
      </InputArea>

      <Button type="submit">Salvar</Button>
      {/* <ToastContainer/> */}
    </FormContainer>
  );
}

export default Form;