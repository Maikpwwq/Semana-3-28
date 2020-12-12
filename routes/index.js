const router = require('express').Router();
const apiRouterAuth = require('./api/auth');
const apiRouterUser = require('./api/users');

// Manejador Ruta /auth
router.use('/auth', apiRouterAuth);
router.use('/user', apiRouterUser);

module.exports = router;