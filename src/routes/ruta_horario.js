const Router = require('koa-router');
const router = new Router();
const { asignarTareasYClases } = require('../asignacionHorario');

router.post('horario.create', '/', async(ctx) => {
    try{
        const horario = await ctx.orm.Horario.create(ctx.request.body)
        ctx.body = horario;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('horario.delete', '/:id', async (ctx) => {
    try {
        const horario = await ctx.orm.Horario.findByPk(ctx.params.id);

        if (!horario) {
            ctx.status = 404;
            ctx.body = { error: 'horario no encontrado' };
        } else {
            console.log('Antes de eliminar:', horario);
            await ctx.orm.Tarea.destroy({ where: { id_horario: ctx.params.id } });
            await ctx.orm.Ramo.destroy({ where: { id_horario: ctx.params.id } });
            await horario.destroy();
            console.log('Después de eliminar:', horario);
            ctx.status = 204;
        }
    } catch (error) {
        ctx.body = { error: 'Error al eliminar horario' };
        ctx.status = 500;
    }
});

router.get("horario.list", '/horarioData', async(ctx) => {
    try {
        const horario = await ctx.orm.Horario.findAll()
        ctx.body = horario;
        ctx.status = 200;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get('horario.show','/:id', async(ctx) => {
    try {
        const horario = await ctx.orm.Horario.findOne({ where: { id: ctx.params.id } });
        if (horario.distribucion_tareas == null){
            await asignarTareasYClases(ctx, ctx.params.id);
        }
        ctx.body = horario;
        ctx.status = 201;
      } catch (error) {
        ctx.body = error;
        ctx.status = 400;
      }
});






module.exports = router; 