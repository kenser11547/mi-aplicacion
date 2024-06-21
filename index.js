const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Middleware para servir archivos estáticos (si es necesario)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal, por ejemplo para servir una página estática
app.get('/', (req, res) => {
  res.send('Servidor Node.js corriendo correctamente!');
});

// Ruta para manejar el formulario POST
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  console.log('Recibida solicitud POST en la ruta /submit');
  console.log('Datos recibidos:', name, message);
  res.send(`<h1>Gracias, ${name}</h1><p>Tu mensaje: ${message}</p>`);
});

// Escucha en el puerto especificado
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});