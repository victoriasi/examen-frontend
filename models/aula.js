module.exports = (sequelize, DataType) => {
const Aula=sequelize.define("Aula",{
    id_aula: {
        primaryKey:true,
        type: DataType.INTEGER, 
        autoIncrement: true,
        unique: true
    },
    nombre: {
        type: DataType.STRING(100)
    },
    capacidad: {
        type: DataType.STRING(100)
    },
});
        return Aula;
};