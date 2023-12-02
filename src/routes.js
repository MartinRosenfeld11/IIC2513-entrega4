const Router = require('koa-router');
const usuarios = require('./routes/ruta_usuario.js');
const tareas = require('./routes/ruta_tarea.js');
const horarios = require('./routes/ruta_horario.js');
const notificacions = require('./routes/ruta_notificacion.js');
const clases = require('./routes/ruta_ramo.js');
const authRoutes = require('./routes/authentication.js')
const jwtMiddleware = require('koa-jwt');
const dotenv = require('dotenv');
const scopeProtectedRoutes = require('./routes/scopeExample.js')
const solicituds = require('./routes/ruta_solicitud.js')
const amigos = require('./routes/ruta_amigos.js')
const pomodoros = require('./routes/ruta_pomodoro.js')


dotenv.config();

const router = new Router();

router.use('/tarea', tareas.routes());
router.use('/notificacion', notificacions.routes());
router.use('/horario', horarios.routes());
router.use('/clase', clases.routes());
router.use('/solicitud', solicituds.routes());
router.use('/amigos', amigos.routes());
router.use('/pomodoro', pomodoros.routes());
router.use(authRoutes.routes())

router.use(jwtMiddleware( { secret: process.env.JWT_SECRET } ));

router.use('/usuario', usuarios.routes());
router.use ('/scope-example', scopeProtectedRoutes. routes ( ))

module.exports = router;