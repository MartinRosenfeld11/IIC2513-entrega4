const Router = require('koa-router');
const router = new Router();

router.post('pomodoro.create', '/', async(ctx) => {
    try{
        const pomodoro = await ctx.orm.Pomodoro.create(ctx.request.body)
        ctx.body = pomodoro;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get('pomodoro.show','/:id', async(ctx) => {
    try{
        const pomodoro = await ctx.orm.Pomodoro.findOne({where:{id: ctx.params.id}});
        ctx.body = pomodoro;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('pomodoro.delete', '/:id', async (ctx) => {
    try {
        const pomodoro = await ctx.orm.Pomodoro.findByPk(ctx.params.id);

        if (!pomodoro) {
            ctx.status = 404;
            ctx.body = { error: 'Pomodoro no encontrada' };
        } else {
            await pomodoro.destroy();
            ctx.status = 204;
        }
    } catch (error) {
        ctx.body = { error: 'Error al eliminar pomodoro' };
        ctx.status = 500;
    }
});


router.patch('pomodoro.update', '/:id', async(ctx) => {
    try {
        const pomodoro = await ctx.orm.Pomodoro.findOne({where:{id: ctx.params.id}});
        if (!pomodoro) {
            ctx.status = 404; 
            ctx.body = {error: 'No se encontró el pomodoro'}
        } else {
            await pomodoro.update(ctx.request.body);
            ctx.body = pomodoro; 
            ctx.status = 200;
        }
    } catch(error) {
        ctx.status = 500;
        ctx.body = { error: 'Error al actualizar pomodoro' };
    }
});




module.exports = router; 