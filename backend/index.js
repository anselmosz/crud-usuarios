import app from "./src/app.js";

const port = 3002;

app.listen(port, () => {
  console.log(`\nServidor rodando em https://localhost/${port}`);
});