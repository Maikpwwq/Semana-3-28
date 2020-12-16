const jwt = require('jsonwebtoken');
const { users } = require('../models');
const config = require('../secret/config.js');

const checkToken = async ( token ) => {
    let localID = null;
    
    try {
        const { id } = await token.decode(token);
        localID = id;
    } catch ( error ) {
        return false;
    };
    
    console.log( localID );

    const user = await users.findOne({
        where: { id: localID, status: 1 }
    }); 
    
    if ( user ) {
        const token = encode(user);
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
            name: user.name,
            email: user.email,
            rol: user.rol,
            status: user.status
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
                where: { id: id, status: 1 }
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