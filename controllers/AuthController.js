const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../secret/config.js');

// iniciarSesion
exports.signin = async (req, res, next) => {
    try {
        const user = await db.user.findOne({ 
            where: { email: req.body.email }
        });

        if (user) {
            const passwordIsValid = bcrypt.compareSync( req.body.password, user.password );

            if (passwordIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    name: user.userName,
                    email: user.email,
                    rol: user.rol
                }, config.secret , {
                    // Expira en x segundos
                    expiresIn: 86400,
                });

                res.status(200).send({
                    auth: true,
                    accessToken: token
                });
            } else {
                res.status(401).send({
                    auth: false,
                    accessToken: null,
                    error: 'Contraseña invalida'
                });
            };

        } else {
            res.status(404).json({
                error: 'Error al buscar con estos datos de usuario y contraseña'
            });
        };

    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        // Evitar el bloqueo al dar permiso de continuar
        next(error)
    }
}; 

// registrarUsuario
exports.signup = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.user.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};