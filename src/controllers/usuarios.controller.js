const usuarioService = require("../services/usuarios.service");

module.exports = {
  getAllUsers: async(req, res) => {
    const usuarios = await usuarioService.listarUsuarios();

    if (!usuarios || usuarios.length === 0) return res.status(404).json({message: "Dados não encontrados"});

    return res.status(200).json(usuarios);
  },

  getUserById: async(req, res) => {
    const usuario = await usuarioService.buscarUsuarioPorId(req.params.id);
    
    if (!usuario || usuario.length === 0) return res.status(404).json({message: "Dados não encontrados"});

    return res.status(200).json(usuario);
  },

  createUser: async(req, res) => {

  },
  
  updateUser: async(req, res) => {

  },

  deleteUser: async(req, res) => {

  },
};