'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ramo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Horario, {
        foreignKey: 'id_horario',
      });
    }
  }
  Ramo.init({
    horario: DataTypes.INTEGER,
    modulo_horario: DataTypes.STRING,
    id_horario: DataTypes.INTEGER,
    nombre: DataTypes.STRING, 
    dia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ramo',
  });
  return Ramo;
};