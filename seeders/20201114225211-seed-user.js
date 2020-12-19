'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
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
                password: '$2y$08$v7KTRsDwhrsEqnBmGq3PpeS9sp/UKsf9CI0lCYA49Ur9xy/ZsqOHe', //reto3
                rol: "Administrador",
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }           
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};