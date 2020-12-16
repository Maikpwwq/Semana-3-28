'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                name: 'carlos',
                email: 'ejemplo@gmail.com',
                password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO', //micontraseña
                rol: "Administrador",
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'michael',
                email: 'michael@gmail.com',
                password: '$2y$10$um0kVrDwgLsMIArGDiVM5eSMbJWwOhqkVFVkWxcU3ABbRN.X42qBW', //boundless
                rol: "Administrador",
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }           
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};