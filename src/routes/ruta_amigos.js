const Router = require('koa-router');
const router = new Router();

router.post('amigos.create', '/', async(ctx) => {
    try{
        const amigos = await ctx.orm.Amigos.create(ctx.request.body)
        ctx.body = amigos;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get('amigos.show','/:id', async(ctx) => {
    try{
        const amigos = await ctx.orm.Amigos.findOne({where:{id: ctx.params.id}});
        ctx.body = amigos;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('amigos.delete', '/:id', async (ctx) => {
    try {
        const amigos = await ctx.orm.Amigos.findByPk(ctx.params.id);

        if (!amigos) {
            ctx.status = 404;
            ctx.body = { error: 'Amigos no encontrados' };
        } else {
            await amigos.destroy();
            ctx.status = 204;
        }
    } catch (error) {
        ctx.body = { error: 'Error al eliminar amigos' };
        ctx.status = 500;
    }
});

router.patch('amigos.update', '/:id', async(ctx) => {
    try {
        const amigos = await ctx.orm.Amigos.findOne({where:{id: ctx.params.id}});
        if (!amigos) {
            ctx.status = 404; 
            ctx.body = {error: 'No se encontraron amigos'}
        } else {
            await amigos.update(ctx.request.body);
            ctx.body = amigos; 
            ctx.status = 200;
        }
    } catch(error) {
        ctx.status = 500;
        ctx.body = { error: 'Error al actualizar amigos' };
    }
});


module.exports = router; 