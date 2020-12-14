const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/users/'
router.get('/list', auth.verificarAdministrador, userController.listar);

// ruta: '/api/users/actualizar'
router.post('/actualizar', auth.verificarAdministrador, userController.actualizar);

// ruta: '/api/users/administrar'   Roles de usuario
// router.post('/administrar', userController.administrar);

module.exports = router;