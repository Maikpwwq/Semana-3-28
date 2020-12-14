const db = require('../models');
const bcrypt = require('bcryptjs');

// listarUsuarios
exports.listar = async (req, res, next) => {
    try {
        const users = await db.user.findAll();
        res.status(200).send({ 
            users: users
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
    }  
};

// actualizarDatos de usuario como cambiarPassword
exports.actualizar = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.user.update(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error -> Error al intentar actualizar los datos del usuario con esta informacion' + error
        })
    }  
};

// administrarRoles res.status(404).send('User Not Found.');
exports.administrar = async (req, res, next) => {
    try {
        const users = await db.user.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        })
    }  
};