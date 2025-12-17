const express = require("express");
const app = express();

app.use(express.json());

// Rotas
const usuarioRoute = require("./routes/usuarios.route")
app.use("/usuarios", usuarioRoute);

module.exports = app;