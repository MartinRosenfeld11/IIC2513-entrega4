'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
      });
      this.hasMany(models.Tarea, {
        foreignKey: 'id',
      });
      this.hasMany(models.Ramo, {
        foreignKey: 'id',
      });
    }
  }
  Horario.init({
    id_usuario: DataTypes.INTEGER,
    modulos_libres: DataTypes.INTEGER,
    distribucion_tareas: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Horario',
  });
  return Horario;
};