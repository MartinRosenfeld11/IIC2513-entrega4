'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: 'id',
      });
    }
  }
  Amigos.init({
    id_usuario: DataTypes.INTEGER,
    lista_amigos: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Amigos',
  });
  return Amigos;
};