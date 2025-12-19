import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createUser, updateUser } from "../services/users";
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

const Label = styled.label`
  margin-bottom: 6px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ onEdit, setOnEdit, getUsers, }) => {
  const [form, setForm] = useState({
    id: null,
    nome: "",
    email: "",
    senha: "",
  });

  useEffect(() => {
    if (onEdit) {
      setForm({
          idUsuario: onEdit.idUsuario,
          nome: onEdit.nome,
          email: onEdit.email,
          senha: onEdit.senha
      })
    }
  }, [onEdit])

  function handleChange(e) {
    const {name, value} = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (form.idUsuario) {
        await updateUser(form.idUsuario, {
          nome: form.nome,
          email: form.email,
          senha: form.senha 
        })
        toast.success("Usuário editado")
        setForm({nome: "", email: "", senha: ""})
      } 
      else {
        if (!form.email || !form.nome || !form.senha) {
          toast.warning("Falta preencher outros campos")
        }
        else {
          try {
            await createUser(form)
            toast.success("Usuário criado com sucesso")
            setForm({nome: "", email: "", senha: ""})
          }
          catch {
            toast.error("Falha ao salvar usuário") 
          }
        }
      }
    } 
    catch {
      toast.error("Falha ao editar")
    } 
    
    setOnEdit(null)
    getUsers()
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
          type="email"
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
    </FormContainer>
  );
}

export default Form;