const modelos = require('../db');

module.exports = app => {

  app.get("/docentes/:idusuario", (req, res) => {      
    Promise.resolve()
    .then(() => listarUsuarios())
    .then((listadoDePersonas) => {
      res.json(listadoDePersonas);
    })
    .catch(() => res.status(500).json('Error grave'));
});

app.get("/usuario/:id_usuario", (req, res) => {
  Promise.resolve()
    .then(() => buscarUsuario(req.params.id_usuario))
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      res.status(500).json('Error grave')
    });
});



function buscarUsuario(id_usuario) { 
  console.log("entrando"+id_usuario);  
  return modelos.Usuario.findById(id_usuario)
  .then(respuesta => {
    console.log("\n***modificando usuario");
  console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => console.log(error));       
}


app.post("/api/docentes/new", (req, res) => {
  Promise.resolve()
    .then(() => crearDocente(req.body))
    .then((docente) => {
      res.status(201).json(docente);
    })
    .catch(() => res.status(500).json('Error ......'));
});


function crearDocente(docente) {
  docente.nombre = docente.nombre;    
  docente.email=docente.email;
  docente.especialidad=docente.especialidad;
  return modelos.Docente.create(docente)
  .then(respuesta => {
    console.log("\n***creando docente");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => console.log(error));
}



app.delete("/api/usuarios/delete/:idusuario", (req, res) => {
  var id=req.params.idusuario;
  Promise.resolve()
    .then(() => eliminarUsuarios(id))
    .then((resultado) => {
      res.status(201).json(resultado);
    })
    .catch(() => res.status(500).json('Error grave'));
});


app.put("/api/usuarios/update/:id_usuario", (req, res) => {
  Promise.resolve()
    .then(() => modificarUsuario(req.body, req.params.id_usuario))
    //.then(() => buscarPersona(req.params.id_usuario))
    .then((usuarioModificado) => {
      res.json(usuarioModificado);
    })
    .catch((err) => {
      console.log('+++++++++++++++++++++++++++++++++++++++++++');
      console.log(err);
      console.log('+++++++++++++++++++++++++++++++++++++++++++');
      res.status(500).json('Error grave');
    });
});


function modificarUsuario(usuario, id_usuario) {
  return modelos.Usuario.update(usuario, {    
    where: {
      id_usuario: id_usuario,
    }
  })
  .then(respuesta => {
    console.log("\n***modificando usuario");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => console.log(error));
}






function eliminarUsuarios(usuarioId) {
  return modelos.Usuario.destroy({
    where: {
      id_usuario: usuarioId
    }
  })
  .then(respuesta => {
    console.log("\n***eliminando usuario");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  })
  .catch(error => console.log(error));
}


  function crearPersona(persona) {
    persona.nombre = persona.nombre;    
    persona.email=persona.email;
    persona.password=persona.password;
    return modelos.Usuario.create(persona)
    .then(respuesta => {
      console.log("\n***creando persona");
      console.log(JSON.stringify(respuesta));
      return respuesta;
    }).catch(error => console.log(error));
  }
  

 app.get("/docentes", (req, res) => {      
      Promise.resolve()
      .then(() => listarDocentes())
      .then((listadoDeDocentes) => {
        res.json(listadoDeDocentes);
      })
      .catch(() => res.status(500).json('Error grave'));
  });
   
  
 //------Listar  Usuarios-----------
 function listarDocentes() {
  return modelos.Docente.findAll()
  .then(respuesta => {
    console.log("\n***Listando docentes ....!!!!");
    console.log(JSON.stringify(respuesta));
    return respuesta;
  }).catch(error => {
    // logger
    throw error;
  });
}

};