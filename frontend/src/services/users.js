import { api } from "./api";

export const getAllUsers = async () => {
  const response = await api.get("/usuarios/");
  return response.data;
}

export const getUserById = async (id) => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data
};

// export const createUser = (dados) => api.post("/usuarios", dados);

// export const updateUser = (id, dados) => api.post(`/usuarios/${id}`, dados);