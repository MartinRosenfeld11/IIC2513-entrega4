const Router = require('koa-router');
const router = new Router();

router.post('solicitud.create', '/', async(ctx) => {
    try{
        const solicitud = await ctx.orm.Solicitud.create(ctx.request.body)
        ctx.body = solicitud;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get("solicitud.list", '/solicitudData', async(ctx) => {
    try {
        const solicitud = await ctx.orm.Solicitud.findAll()
        ctx.body = solicitud;
        ctx.status = 200;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get('solicitud.show','/:id', async(ctx) => {
    try{
        const solicitud = await ctx.orm.Solicitud.findOne({where:{id: ctx.params.id}});
        ctx.body = solicitud;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('solicitud.delete', '/:id', async(ctx) => {
    try {
        const solicitud = await ctx.orm.Solicitud.findByPk(ctx.params.id);
        if (!solicitud) {
            ctx.status = 404;
            ctx.body = { error: 'Solicitud no encontrada' };
        } else {
            await solicitud.destroy();
            ctx.status = 204;
        }
    } catch(error) {
        ctx.body = { error: 'Error al eliminar solicitud' };
        ctx.status = 500; 
    }
});


module.exports = router; 