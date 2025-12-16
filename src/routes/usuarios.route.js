const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.get("/", usuariosController.getAllUsers);
router.get("/:id", usuariosController.getUserById);

module.exports = router;