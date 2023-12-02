const Router = require('koa-router');
const router = new Router();

router.post('notificacion.create', '/', async(ctx) => {
    try{
        const notificacion = await ctx.orm.Notificacion.create(ctx.request.body)
        ctx.body = notificacion;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('notificacion.delete', '/:id', async(ctx) => {
    try {
        const notificacion = await ctx.orm.Notificacion.findByPk(ctx.params.id);
        if (!notificacion) {
            ctx.status = 404;
            ctx.body = { error: 'Notificación no encontrada' };
        } else {
            await notificacion.destroy();
            ctx.status = 204;
        }
    } catch(error) {
        ctx.body = { error: 'Error al eliminar notificacion' };
        ctx.status = 500; 
    }
});


module.exports = router; 