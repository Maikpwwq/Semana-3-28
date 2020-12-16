const router = require('express').Router();
const authController = require('../../controllers/AuthController.js');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Iniciar Sesion
// ruta inicio de sesión: '/api/auth/signin'
router.post('/signin', authController.signin);

// Agregar nuevo usuario
// ruta inicio de sesión: '/api/auth/signup'
router.post('/signup', authController.signup);

module.exports = router;