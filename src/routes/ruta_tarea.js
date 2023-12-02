const Router = require('koa-router');
const router = new Router();

router.post('tarea.create', '/', async(ctx) => {
    try{
        const tarea = await ctx.orm.Tarea.create(ctx.request.body)
        ctx.body = tarea;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get("tarea.list", '/tareaData', async(ctx) => {
    try {
        const tarea = await ctx.orm.Tarea.findAll()
        ctx.body = tarea;
        ctx.status = 200;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get('tarea.show','/:id', async(ctx) => {
    try{
        const tarea = await ctx.orm.Tarea.findOne({where:{id: ctx.params.id}});
        ctx.body = tarea;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('tarea.delete', '/:id', async (ctx) => {
    try {
        const tarea = await ctx.orm.Tarea.findByPk(ctx.params.id);

        if (!tarea) {
            ctx.status = 404;
            ctx.body = { error: 'Tarea no encontrada' };
        } else {
            await tarea.destroy();
            ctx.status = 204;
        }
    } catch (error) {
        ctx.body = { error: 'Error al eliminar tarea' };
        ctx.status = 500;
    }
});


router.patch('tarea.update', '/:id', async(ctx) => {
    try {
        const tarea = await ctx.orm.Tarea.findOne({where:{id: ctx.params.id}});
        if (!tarea) {
            ctx.status = 404; 
            ctx.body = {error: 'No se encontró la tarea'}
        } else {
            await tarea.update(ctx.request.body);
            ctx.body = tarea; 
            ctx.status = 200;
        }
    } catch(error) {
        ctx.status = 500;
        ctx.body = { error: 'Error al actualizar tarea' };
    }
});




module.exports = router; 