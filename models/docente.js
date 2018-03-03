module.exports = (sequelize, DataType) => {
const Docente=sequelize.define("Docente", {
    id_docente: {
       type: DataType.INTEGER, 
       primaryKey:true,       
       autoIncrement: true,       
     },
    nombre: {
        type: DataType.STRING(100)
    },
     email: { 
        type: DataType.STRING(100)
     },
     especialidad:{
        type: DataType.STRING(100) 
     },  
});


Docente.associate = (models) => {
    models.Docente.belongsToMany(models.Aula, {foreignKey: 'id_docente', as:"docentes" ,through: "Reserva" });
    models.Aula.belongsToMany(models.Docente, {foreignKey: 'id_aula', as:"aulas", through: "Reserva" });     
    models.Docente.hasOne(models.Materia,{foreignKey:"id_docente", as:"datosDocente" });
   // models.Materia.hasMany(models.Reserva, {foreignKey: 'id_materia', as:"materias" }); 
    models.Materia.belongsToMany(models.Aula, {foreignKey: 'id_materia', as:"materias", through: "Reserva" }); 


    
 }  
 return Docente;
};



