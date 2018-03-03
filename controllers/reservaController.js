const modelos = require('../db');

module.exports = app => {
  
    app.post("/api/reserva/new", (req, res) => {
        var  fecha_inicio=req.body.fecha_inicio;
        var  fecha_fin=req.body.fecha_fin;
        var  hora_inicio=req.body.hora_inicio;
        var  hora_fin=req.body.hora_fin;
        var  id_materia=req.body.id_materia;
        var  id_aula=req.body.id_aula;

        Promise.resolve()
        modelos.Materia.
        findOrCreate({where: {fecha_inicio: fecha_inicio,fecha_fin:fecha_fin,
                              hora_inicio:hora_inicio,hora_fin:hora_fin,
                              id_materia:id_materia,
                              id_aula:id_aula,
                              fecha_inicio:{
                                [Op.between]: [fecha_inicio, fecha_fin], 
                              },
                              hora_inicio:{
                                [Op.between]: [hora_inicio, hora_fin], 
                              },                              
                                         
                            },       
   
         defaults: {nombre: nombre,semestre:semestre}})          
          .then((materia) => {
            res.status(201).json(materia);
            console.log()
          })
          .catch(() => res.status(500).json('Error ......'));  
      });         
    
      
    

 app.get("/reservas", (req, res) => {      
      Promise.resolve()
      .then(() => listarReservas())
      .then((listadoDeReservas) => {
        res.json(listadoDeReservas);
      })
      .catch(() => res.status(500).json('Error grave'));
  });  
  
 
 function listarReservas() {
  return modelos.Reserva.findAll()
  .then(respuesta => {
    console.log("\n***Listando reservas....!!!!");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

};