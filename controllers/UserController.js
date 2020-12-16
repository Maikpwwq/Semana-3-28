const { users } = require('../models');
const bcrypt = require('bcryptjs');

// listarUsuarios
exports.listar = async (req, res, next) => {
    try {
        const Users = await users.findAll();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// actualizarDatos de usuario como cambiarPassword
exports.actualizar = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const userUpdate = await users.update( {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email            
        },{
            where: {
                id: req.body.id
            } 
        });
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(401).json({
            message: 'Error -> Error al intentar actualizar los datos del usuario con esta informacion' + error
        });
        next(error)
    }  
};

// administrar status activar usuario
exports.activate = async (req, res, next) => {
    try {
        const userActivate = await users.update( { estado: 1 }, {
            where: { id: req.body.id }
        });
        res.status(200).json(userActivate);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// administrar status desactivar usuario
exports.deactivate = async (req, res, next) => {
    try {
        const userDeactivate = await users.update( { estado: 0 }, {
            where: { id: req.body.id }
        });
        res.status(200).json(userDeactivate);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// administrarRoles res.status(404).send('User Not Found.');
exports.administrar = async (req, res, next) => {
    try {
        const userAdmin = await users.update( { 
            rol: "Administrador" 
        }, {
            where: { id: req.body.id }
        });
        res.status(200).json(userAdmin);
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};