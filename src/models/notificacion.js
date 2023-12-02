'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tarea, {
        foreignKey: 'id_tarea',
      });
    }
  }
  Notificacion.init({
    horas_sobrepasadas: DataTypes.INTEGER,
    opcion_proporcion: DataTypes.BOOLEAN,
    id_tarea: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notificacion',
  });
  return Notificacion;
};