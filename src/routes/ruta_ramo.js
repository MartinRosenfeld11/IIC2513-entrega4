const Router = require('koa-router');
const router = new Router();

router.post('clase.create', '/', async(ctx) => {
    try{
        const clase = await ctx.orm.Ramo.create(ctx.request.body)
        ctx.body = clase;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get("clase.list", '/claseData', async(ctx) => {
    try {
        const clase = await ctx.orm.Ramo.findAll()
        ctx.body = clase;
        ctx.status = 200;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.get('clase.show','/:id', async(ctx) => {
    try{
        const clase = await ctx.orm.Ramo.findOne({where:{id: ctx.params.id}});
        ctx.body = clase;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('clase.delete', '/:id', async (ctx) => {
    try {
        const clase = await ctx.orm.Ramo.findByPk(ctx.params.id);

        if (!clase) {
            ctx.status = 404;
            ctx.body = { error: 'Clase no encontrada' };
        } else {
            await clase.destroy();
            ctx.status = 204;
        }
    } catch (error) {
        ctx.body = { error: 'Error al eliminar clase' };
        ctx.status = 500;
    }
});


router.patch('clase.update', '/:id', async(ctx) => {
    try {
        const clase = await ctx.orm.Ramo.findOne({where:{id: ctx.params.id}});
        if (!clase) {
            ctx.status = 404; 
            ctx.body = {error: 'No se encontró la clase'}
        } else {
            await clase.update(ctx.request.body);
            ctx.body = clase; 
            ctx.status = 200;
        }
    } catch(error) {
        ctx.status = 500;
        ctx.body = { error: 'Error al actualizar clase' };
    }
});

module.exports = router; 