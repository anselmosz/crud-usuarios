import { api } from "./api";

export const getAllUsers = async () => {
  const response = await api.get("/usuarios/");
  return response.data;
}

export const getUserById = async (id) => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data
};

export const createUser = async (dados) => {
  // const response = 
  await api.post("/usuarios/", dados);
  // return response;
}

export const updateUser = async (id, dados) => {
  // const response = 
  await api.put(`/usuarios/${id}`, dados);
  // return response;
}

export const deleteUser = async (id) => {
  await api.delete(`/usuarios/${id}`);
}
// export const createUser = (dados) => api.post("/usuarios", dados);
