const db = require('../models');
const bcrypt = require('bcryptjs');

// Adicionar un Usuario
exports.add = async (req, res, next) => {
    try {    
        const registro = await db.users.create(req.body);
        res.status(200).json(registro);
    } catch (error) {
        res.status(401).json({
            message: 'Error al registrar el usuario con estos datos' + error
        });
        next(error)
    }  
};

// Listar los Usuarios
exports.listar = async (req, res, next) => {
    try {
        const users = await db.users.findAll();
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).send({
                message: 'No existen usuarios en el sistema'
            });
        };            
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// Actualizar los datos del Usuario
exports.actualizar = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await db.users.update({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            rol: req.body.rol
        }, { 
            where: { id: req.body.id }
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({
            message: 'Error -> Error al actualizar los datos del usuario con esta informacion, intente de nuevo' + error
        });
    }  
};

// metodo activar usuario 
exports.activar = async (req, res, next) => {
    try {
        const user = await db.users.update({ status: 1 }, { 
            where: { id: req.body.id }
        });
        res.status(200).json(user);     
        // res.status(404).send('User Not Found.');   
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};

// metodo desactivar usuario
exports.desactivar = async (req, res, next) => {
    try {
        const user = await db.users.update({ status: 0 }, { 
            where: { id: req.body.id }
        });
        res.status(200).json(user);        
    } catch (error) {
        res.status(500).send({
            message: 'Error ->' + error
        });
        next(error)
    }  
};