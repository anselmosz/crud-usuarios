import express from 'express'
import router from './routes/usuarios.route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const usuariosRoute = router;
app.use("/usuarios", usuariosRoute);

// module.exports = app;

export default app;