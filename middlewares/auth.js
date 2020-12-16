// Middleware de autenticacion

const tokenServices = require('../services/token');

module.exports = {

    verificarAdministrador: async(req, res, next) => {
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No hay token!!'
            });
        } else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === "Administrador") {
                next()
            } else {
                return res.status(403).send({
                    message: 'El usuario no tiene los permisos requeridos'
                });
            }
        }
    },
    
    verificarUsuario: async(req, res, next) => {
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No hay token!!'
            });
        } else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
                next()
            } else {
                return res.status(403).send({
                    message: 'El usuario no tiene los permisos requeridos'
                });
            }
        }
    }
    
};