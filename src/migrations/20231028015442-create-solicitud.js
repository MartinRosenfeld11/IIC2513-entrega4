'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicituds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.INTEGER
      },
      id_usuario_emisor: {
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id'}
      },
      id_usuario_receptor: {
        type: Sequelize.INTEGER
      },
      nombre_tarea: {
        type: Sequelize.STRING
      },
      horario_tentativo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Solicituds');
  }
};