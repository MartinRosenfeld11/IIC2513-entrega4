const Router = require('koa-router');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

const router = new Router();


// {
//     "email": "micorreo@correo.com",
//     "username": "pepito123",
//     "password": "pepito321"
// }


router.post("authentication.signup", "/signup", async (ctx) => {
    const authInfo = ctx.request.body;
    let user = await ctx.orm.Usuario.findOne({ where: { nombre: authInfo.nombre } })
    if (user) {
        ctx.body = `The user by the name '${authInfo.nombre}' already exists`
        ctx.status = 400;
        return;
    }
    try {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(authInfo.contrasena, saltRounds);

        user = await ctx.orm.Usuario.create({
            nombre: authInfo.nombre,
            contrasena: hashPassword,
            tipo: authInfo.tipo
        })
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    ctx.body = {
        nombre: user.nombre
    };
    ctx.status = 201;
})

router.post("authentication.login", "/login", async (ctx) => {
    let user;
    const authInfo = ctx.request.body;
    try {
        user = await ctx.orm.Usuario.findOne({ where: { nombre: authInfo.nombre } })
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    console.log(user)
    if (!user) {
        ctx.body = `The user by the name '${authInfo.nombre}' was not found`
        ctx.status = 400;
        return;
    }

    const isValidPassword = await bcrypt.compare(authInfo.contrasena, user.contrasena);

    if (isValidPassword) {
        ctx.body = {
            nombre: user.nombre,
            contrasena: user.contrasena
        };
        ctx.status = 200;
    } else {
        ctx.body = "Incorrect password";
        ctx.status = 400;
        return;
    }
    // JWT
    const expirationSeconds = 1 * 60 * 60 * 24;
    const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
    var token = jwt.sign(
        { scope: ['user'] },
        JWT_PRIVATE_KEY,
        { subject: user.id.toString() },
        { expiresIn: expirationSeconds }
    );
    ctx.body = {
        "usuario": user,
        "access_token": token,
        "token_type": "Bearer",
        "expires_in": expirationSeconds,
    }
    ctx.status = 200;
})

module.exports = router;
