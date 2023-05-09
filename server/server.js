// Importar las librerías necesarias
const express = require('express');
const mongoose = require('mongoose');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const compression = require('compression');

// Crear la aplicación Express
const app = express();

// Configurar la base de datos
//const dbURI = 'mongodb+srv://<usuario>:<contraseña>@<servidor>/<nombre_db>';
const dbURI = 'mongodb+srv://fabianbanderasb:fabucoM7_@@cluster0.gjqyjnh.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.log('Error al conectarse a la base de datos', err);
  });

// Configurar el middleware
app.use(bodyParser.json());
app.use(compression());

// Definir las rutas de la aplicación
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
