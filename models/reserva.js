module.exports = (sequelize, DataType) => {
  const Reserva = sequelize.define("Reserva", {
    id_reserva: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
   id_docente: {
    type: DataType.INTEGER,
      references: 'Usuario',
      referencesKey: 'id_usuario',
      allowNull: false
    },
    id_aula: {
      type: DataType.INTEGER,
      references: 'Sala',
      referencesKey: 'id_sala',
      allowNull: false
    },
    id_materia: {
      type: DataType.INTEGER,
      references: 'Materia',
      referencesKey: 'id_materia',
      allowNull: false
    },
    


    fecha_inicio: {
      type:DataType.DATEONLY
    },
    fecha_fin: {
      type:DataType.DATEONLY
    },
    hora_inicio: {
      type:DataType.TIME
    },
    hora_fin: {
      type:DataType.TIME
    }       
     });
    
    return Reserva;
    };

   

