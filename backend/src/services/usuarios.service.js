import knex from 'knex';
import knexfile from '../../knexfile.js';

const conexaoDB = knex(knexfile);

export default {
  listarUsuarios: async () => {
    const usuarios = await conexaoDB("tbusuarios");
    return usuarios;
  },

  buscarUsuarioPorId: async (id) => {
    const usuario = await conexaoDB.select().from("tbusuarios").where("idUsuario", id);
    return usuario;
  },

  cadastrarUsuario: async (dados) => {
    await conexaoDB("tbusuarios").insert(dados);
  },

  atualizarUsuario: async (id, dados) => {
    const resultado = await conexaoDB("tbusuarios").where("idUsuario", id).update(dados);

    if (resultado === 0) return null;

    return resultado;
  },

  deletarUsuario: async(id) => {
    const resultado = await conexaoDB("tbusuarios").where("idUsuario", id).del();

    if (resultado === 0) return null;

    return resultado;
  },
};