const router = require('express').Router();
const authController = require('../../controllers/AuthController.js');

// ruta inicio de sesión: '/api/auth/signin'
router.post('/signin', authController.signin);

// ruta inicio de sesión: '/api/auth/signup'
router.post('/signup', authController.signup);

module.exports = router;