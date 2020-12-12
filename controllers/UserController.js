const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// listarUsuarios
exports.listar = async (req, res, next) => {
    try {
        const users = await models.users.findAll();
        res.status(200).json(users);
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
        const user = await models.users.create(req.body);
        res.status(200).json(user);
    } catch (error) {

    }  
};

// administrarRoles
exports.administrar = async (req, res, next) => {
    try {
        const users = await models.users.findAll();
        res.status(200).json(users);
    } catch (error) {

    }  
};