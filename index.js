const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal para servir la página estática
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para manejar el formulario POST
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  console.log('Recibida solicitud POST en la ruta /submit');
  console.log('Datos recibidos:', name, message);
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gracias</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
          color: #333;
        }
        .container {
          background: rgba(255, 255, 255, 0.85);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 90%;
          max-width: 400px;
        }
        h1 {
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
        }
        p {
          font-size: 18px;
        }
        button {
          padding: 10px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Gracias, ${name}</h1>
        <p>POR TU RESPUESTA: ${message}</p>
        <button onclick="window.history.back()">Regresar</button>
      </div>
    </body>
    </html>
  `);
});

// Escucha en el puerto especificado
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
