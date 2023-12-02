'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tareas', [
      {
        nombre: 'Jugar tenis',
        duracion_estimada: 3,
        prioridad: 2,
        modulo_horario_asignado: null,
        deadline: '2023-10-30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Tarea 2',
        duracion_estimada: 2,
        prioridad: 1,
        modulo_horario_asignado: null,
        deadline: '2023-11-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Tarea 3',
        duracion_estimada: 1,
        prioridad: 3,
        modulo_horario_asignado: null,
        deadline: '2023-11-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tareas', null, {});
  },
};
