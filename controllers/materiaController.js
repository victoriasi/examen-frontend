const modelos = require('../db');

module.exports = app => {
  
    app.post("/api/materia/new", (req, res) => {
        var  id_docente=req.body.id_docente;
        var  nombre=req.body.nombre;
        var  semestre=req.body.semestre;
        Promise.resolve()
        modelos.Materia.
        findOrCreate({where: {id_docente: id_docente}, defaults: {nombre: nombre,semestre:semestre}}) 
         
          .then((materia) => {
            res.status(201).json(materia);
            console.log()
          })
          .catch(() => res.status(500).json('Error ......'));      


      });
          
    
      
      function crearMateria(materia) {
        
        materia.nombre = materia.nombre;    
        materia.semestre=materia.semestre;  
        modelos.Materia.findOne(materia)        
        .then(respuesta => {
            if (!respuesta )
            return  modelos.Materia.create(materia)
          console.log("\n***creando materia");
          console.log(JSON.stringify(respuesta));
          return respuesta;
        }).catch(error => console.log(error));
      }

 app.get("/materias", (req, res) => {      
      Promise.resolve()
      .then(() => listarMaterias())
      .then((listadoDeMaterias) => {
        res.json(listadoDeMaterias);
      })
      .catch(() => res.status(500).json('Error grave'));
  });   
  
 //------Listar  Usuarios-----------
 function listarMaterias() {
  return modelos.Materia.findAll()
  .then(respuesta => {
    console.log("\n***Listando materias ....!!!!");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

};