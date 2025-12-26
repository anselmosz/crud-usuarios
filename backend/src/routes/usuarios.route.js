import { Router } from 'express';
import usuariosController from '../controllers/usuarios.controller.js';

const router = Router();

router.get("/", usuariosController.getAllUsers);
router.get("/:id", usuariosController.getUserById);
router.post("/", usuariosController.createUser);
router.put("/:id", usuariosController.updateUser);
router.delete("/:id", usuariosController.deleteUser);

export default router;