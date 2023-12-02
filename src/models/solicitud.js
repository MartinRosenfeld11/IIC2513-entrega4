'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario_emisor',
      });
    }
  }
  Solicitud.init({
    estado: DataTypes.INTEGER,
    id_usuario_emisor: DataTypes.INTEGER,
    id_usuario_receptor: DataTypes.INTEGER,
    nombre_tarea: DataTypes.STRING,
    horario_tentativo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Solicitud',
  });
  return Solicitud;
};