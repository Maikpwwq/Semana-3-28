const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../secret/config.js');

const checkToken = async ( token ) => {
    let localID = null;
    
    try {
        const { id } = await jwt.decode(token);
        localID = id;
    } catch ( error ) {
        return false;
    };
    
    console.log( localID );

    const user = await db.user.findOne({
        where: { id: localID, estado: 1 }
    }); 
    
    if ( user ) {
        const token = this.encode(user);
        return {
            token, 
            rol: user.rol
        }
    } else {
        return false
    }
};

module.exports = {
    encode: async(user) => {
        const token = jwt.sign({
            id: user.id,
            name: user.userName,
            email: user.email,
            rol: user.rol,
            status: user.estado
        }, config.secret , {
            // Expira en x segundos
            expiresIn: 86400,
        });
        return token
    },
    decode: async(token) => {
        try {
            //const {id, name, email, rol, estado}
            const { id } = await jws.verify(token, config.secret); 
            const user = await db.user.findOne({
                where: { id: id, estado: 1 }
            });
            if (user) {
                return user
            } else {
                return false
            }
        } catch (error) {
            const newToken = await checkToken (token);
            return newToken
        };
    },
};