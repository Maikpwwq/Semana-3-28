const router = require('express').Router();
const models = require('../../models');
const authController = require('../../controllers/AuthController.js');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

router.get('/', async(req, res)=>{
    const users = await models.users.findAll();
    res.status(200).json(users);
})

// Iniciar Sesion
// ruta inicio de sesión: '/api/auth/signin'
router.post('/signin', authController.signin);

// Agregar nuevo usuario
// ruta inicio de sesión: '/api/auth/signup'
router.post('/signup', authController.signup);

module.exports = router;