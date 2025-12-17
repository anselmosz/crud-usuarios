const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Rotas
const usuarioRoute = require("./routes/usuarios.route")
app.use("/usuarios", usuarioRoute);

module.exports = app;