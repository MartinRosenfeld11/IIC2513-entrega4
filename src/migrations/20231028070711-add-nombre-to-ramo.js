'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar la columna "nombre" a la tabla "Ramo"
    await queryInterface.addColumn('Ramos', 'nombre', {
      type: Sequelize.STRING
    });

    // Agregar la columna "dia" a la tabla "Ramo"
    await queryInterface.addColumn('Ramos', 'dia', {
      type: Sequelize.STRING
    });

    // Eliminar la columna "duracion_estimada" de la tabla "Ramo"
    await queryInterface.removeColumn('Ramos', 'duracion_estimada');
  },

  async down(queryInterface, Sequelize) {
    // Revertir los cambios si es necesario
    // En este caso, podrías revertir la eliminación de la columna "duracion_estimada" y eliminar las columnas "nombre" y "dia".
  }
};