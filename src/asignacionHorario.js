// asignacionHorario.js

let estadoInicial;
// Función para asignar tareas y clases al horario
const asignarTareasYClases = async (ctx, idHorario) => {
    try {
      // Obtener tareas y clases del horario
      const tareas = await ctx.orm.Tarea.findAll({ where: { id_horario: idHorario } });
      const clases = await ctx.orm.Ramo.findAll({ where: { id_horario: idHorario } });
  
      // Ordenar tareas y clases por prioridad y duración
      const tareasOrdenadas = tareas.sort((a, b) => b.prioridad - a.prioridad || a.duracion_estimada - b.duracion_estimada);
      const clasesOrdenadas = clases.sort((a, b) => b.prioridad - a.prioridad);

    estadoInicial = Array.from({ length: 15 }, () => Array(7).fill(''));
      const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];
  
      // Asignar clases fijas al horario
      clasesOrdenadas.forEach((clase) => {
        // Calcular la fila correspondiente según la hora de la clase
        const fila = new Date(`1970-01-01T${clase.horario}`).getHours() - 8;
        // Asignar la clase al horario
        estadoInicial[fila][diasSemana.indexOf(clase.dia)] = { titulo: clase.nombre, detalles: [
            "Dia: " + clase.dia,
            "Horario: " + clase.horario
        ] };
      });
  
      // Asignar tareas restantes al horario
      tareasOrdenadas.forEach((tarea) => {
        let asignada = false;
        // Iterar sobre las filas y columnas del horario
        for (let i = 0; i < 15 && !asignada; i++) {
          for (let j = 0; j < 7 && !asignada; j++) {
            // Verificar si el espacio está disponible
            if (!estadoInicial[i][j]) {
              // Asignar la tarea al horario
              estadoInicial[i][j] = { titulo: tarea.nombre, detalles: [
                "Deadline: " + tarea.deadline.toString().substring(0, 10),
                "Duración Estimada: " + tarea.duracion_estimada,
                "Prioridad: " + tarea.prioridad] };
              // Marcar la tarea como asignada
              asignada = true;
              // Actualizar la duración estimada de la tarea en el horario
              for (let k = 1; k < tarea.duracion_estimada; k++) {
                if (i + k < 15) {
                  estadoInicial[i + k][j] = { titulo: tarea.nombre, detalles: [
                    "Deadline: " + tarea.deadline.toString().substring(0, 10),
                    "Duración Estimada: " + tarea.duracion_estimada,
                    "Prioridad: " + tarea.prioridad
                  ] };
                }
              }
            }
          }
        }
      });
  
      // Actualizar el objeto distribucion_tareas en la base de datos
      const horario = await ctx.orm.Horario.findByPk(idHorario);
      await horario.update({ distribucion_tareas: estadoInicial });
  
      return estadoInicial;
    } catch (error) {
      console.error('Error al asignar tareas y clases al horario:', error);
      throw error;
    }
  };
  
  
  module.exports = { asignarTareasYClases };
  