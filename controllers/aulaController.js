const modelos = require('../db');

module.exports = app => {
  
    app.post("/api/aula/new", (req, res) => {
        Promise.resolve()
          .then(() => crearAula(req.body))
          .then((aula) => {
            res.status(201).json(aula);
          })
          .catch(() => res.status(500).json('Error ......'));
      });
      
      
      function crearAula(aula) {
        aula.nombre = aula.nombre;    
        aula.capacidad=aula.capacidad;       
        return modelos.Aula.create(aula)
        .then(respuesta => {
          console.log("\n***creando aula");
          console.log(JSON.stringify(respuesta));
          return respuesta;
        }).catch(error => console.log(error));
      }

 app.get("/aulas", (req, res) => {      
      Promise.resolve()
      .then(() => listarAulas())
      .then((listadoDeAulas) => {
        res.json(listadoDeAulas);
      })
      .catch(() => res.status(500).json('Error grave'));
  });
   
  
 //------Listar  Usuarios-----------
 function listarAulas() {
  return modelos.Aula.findAll()
  .then(respuesta => {
    console.log("\n***Listando aulas ....!!!!");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

};