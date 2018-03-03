const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors-express');

// Iniciamos el servidor
const app = express();

options = {}; 
app.use(cors(options));
// convertimos el cuerpo del mensaje
app.use(bodyParser.json());


// Iniciamos los modelos de sequelize
const db = require('./db');

// Sincronizamos la base de datos
db.sequelize.sync().done(() => {
  console.log("\n***Base de datos generada");
  app.listen(4000, () => {
    console.log('La aplicación esta escuchando en el puerto 4000!!!');
  });
});



// Habilitamos los logs
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("***Procesando petición...\n");
  next();
});

// Estableciendo rutas para el acceso a base de datos
require("./controllers/docenteController.js")(app);
require("./controllers/aulaController.js")(app);
require("./controllers/materiaController.js")(app);



