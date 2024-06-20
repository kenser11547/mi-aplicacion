const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 9088;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el formulario
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  res.send(`<h1>Gracias, ${name}</h1><p>Tu mensaje: ${message}</p>`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
J