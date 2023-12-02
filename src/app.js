const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const router = require('./routes.js');
const orm = require('./models');

const app = new Koa();

app.context.orm = orm;

// Cors para poder usar el backend en el Frontend
app.use(cors());

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());

// koa router
app.use(router.routes());

// Middleware personalizado. Encargado de dar respuesta "Hola Mundo!"
app.use((ctx) => {
    ctx.body = "Hola Mundo! Saludos desde IIC2513";

});

// Hacer que el servidor escuche en el puerto 3000
// app.listen(3000, () => {
//     console.log( "Iniciando app. Escuchando en el puerto 3000")
// });


module.exports = app;