const router = require('express').Router();
const userController = require('../../controllers/UserController.js');

// Rutas alternas
router.get('*', (req, res)=>{
    res.status(404).send('La pagina a la que intenta acceder no existe!'); 
});

// ruta: '/api/user/'
router.post('/', userController.listar);

// ruta: '/api/user/actualizar'
//router.post('/actualizar', userController.actualizar);

// ruta: '/api/user/administrar'   Roles de usuario
// router.post('/administrar', userController.administrar);

module.exports = router;