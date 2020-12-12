const router = require('express').Router();
const authController = require('../../controllers/AuthController.js');

// Rutas alternas
router.get('*', (req, res)=>{
    res.status(404).send('La pagina a la que intenta acceder no existe!'); 
});

// ruta inicio de sesión: '/api/auth/'
// router.post('/', authController.signin);

// ruta inicio de sesión: '/api/auth/signin'
router.post('/signin', authController.signin);

// ruta inicio de sesión: '/api/auth/signup'
router.post('/signup', authController.signup);

module.exports = router;