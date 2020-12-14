const router = require('express').Router();
const userController = require('../../controllers/UserController.js');

// ruta: '/api/users/'
router.get('/', userController.listar);

// ruta: '/api/users/actualizar'
//router.post('/actualizar', userController.actualizar);

// ruta: '/api/users/administrar'   Roles de usuario
// router.post('/administrar', userController.administrar);

module.exports = router;