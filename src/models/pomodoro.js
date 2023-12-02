'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pomodoro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
      });
    }
  }
  Pomodoro.init({
    tiempo_descanso: DataTypes.INTEGER,
    tiempo_trabajo: DataTypes.INTEGER,
    intervalo_descanso: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pomodoro',
  });
  return Pomodoro;
};