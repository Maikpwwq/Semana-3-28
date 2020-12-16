const router = require('express').Router();
const userController = require('../../controllers/UserController.js');

// middleware verifica los permisos asociados al rol
const auth = require ('../../middlewares/auth.js');

// ruta: '/api/users/list'
router.get('/list', auth.verificarAdministrador, userController.listar);
// ruta: '/api/users/update'
router.put('/update', auth.verificarAdministrador, userController.actualizar);
// ruta: '/api/users/activate' Cambia status: 1
router.put('/activate', auth.verificarAdministrador, userController.activar);
// ruta: '/api/users/deactivate' Cambia status: 0
router.put('/deactivate', auth.verificarAdministrador, userController.desactivar);

module.exports = router;