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
    const { nome, email, senha } = req.body;

    if (!nome && !email && !senha) return res.status(400).json({message: "Dados obrigatórios faltando"});

    const dados = {
      nome,
      email,
      senha
    };

    await usuarioService.cadastrarUsuario(dados);

    res.status(200).json({
      message: "Novo usuario cadastrado!",
      dados: dados
    });
  },
  
  updateUser: async(req, res) => {
    const {nome, email, senha} = req.body;

    const dados = {
      nome,
      email,
      senha
    };

    const resultado = await usuarioService.atualizarUsuario(req.params.id, dados);

    if (!resultado) return res.status(404).json({message: "Dados não encontrados"});

    const usuarioAtualizado = await usuarioService.buscarUsuarioPorId(req.params.id); 

    res.status(200).json({
      message: "Dados atualizados",
      dados: usuarioAtualizado
    });
  },

  deleteUser: async(req, res) => {
    const resultado = await usuarioService.deletarUsuario(req.params.id);

    if (resultado === null) return res.status(404).json({message: "Dados não encontrados"});

    return res.status(200).json({message: "Usuário excluído"})
  },
};