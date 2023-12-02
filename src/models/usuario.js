'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Solicitud, {
        foreignKey: 'id',
      });
      this.hasMany(models.Horario, {
        foreignKey: 'id',
      });
      this.hasOne(models.Amigos, {
        foreignKey: 'id',
      });
      this.hasOne(models.Pomodoro, {
        foreignKey: 'id',
      });
    }
  }
  Usuario.init({
    contrasena: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};