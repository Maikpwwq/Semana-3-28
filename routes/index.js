const router = require('express').Router();
const apiRouterAuth = require('./api/auth.js');
const apiRouterUser = require('./api/users.js');

// Manejador Ruta /auth
router.use('/auth', apiRouterAuth);
// Manejador Ruta /users
router.use('/users', apiRouterUser);

// Rutas alternas
/*router.get('*', (req, res)=>{
    res.status(404).send('La pagina a la que intenta acceder no existe!'); 
});*/

module.exports = router;