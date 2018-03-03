module.exports = (sequelize, DataType) => {
    const Materia=sequelize.define("Materia", {
        id_materia: {
           type: DataType.INTEGER, 
           primaryKey:true,       
           autoIncrement: true,       
         },
        nombre: {
            type: DataType.STRING(100)
        },
         semestre: { 
            type: DataType.STRING(100)
         }
          
    });      
       
     return Materia;
    };    
    
   