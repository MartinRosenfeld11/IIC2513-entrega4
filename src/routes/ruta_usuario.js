const Router = require('koa-router');
const router = new Router();

router.get('usuario.show','/:id', async(ctx) => {
    try{
        const usuario = await ctx.orm.Usuario.findOne({where:{id: ctx.params.id}});
        ctx.body = usuario;
        ctx.status = 201;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

router.delete('usuario.delete', '/:id', async (ctx) => {
    try {
        const usuario = await ctx.orm.Usuario.findByPk(ctx.params.id);

        if (!usuario) {
            ctx.status = 404;
            ctx.body = { error: 'Usuario no encontrado' };
        } else {
            await usuario.destroy();
            ctx.status = 204;
        }
    } catch (error) {
        ctx.body = { error: 'Error al eliminar usuario' };
        ctx.status = 500;
    }
});


router.patch('usuario.update', '/:id', async(ctx) => {
    try {
        const usuario = await ctx.orm.Usuario.findOne({where:{id: ctx.params.id}});
        if (!usuario) {
            ctx.status = 404; 
            ctx.body = {error: 'No se encontró el usuario'}
        } else {
            await usuario.update(ctx.request.body);
            ctx.body = usuario; 
            ctx.status = 200;
        }
    } catch(error) {
        ctx.status = 500;
        ctx.body = { error: 'Error al actualizar usuario' };
    }
});

router.get("usuario.list", '/', async(ctx) => {
    try {
        const usuario = await ctx.orm.Usuario.findAll()
        ctx.body = usuario;
        ctx.status = 200;
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
    }
});

module.exports = router; 