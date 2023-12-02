'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Horario, {
        foreignKey: 'id_horario',
      });
      this.hasOne(models.Notificacion, {
        foreignKey: 'id',
      });
    }
  }
  Tarea.init({
    id_horario: DataTypes.INTEGER,
    duracion_estimada: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    prioridad: DataTypes.INTEGER,
    modulo_horario_asignado: DataTypes.STRING,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};