'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'kursuskuy',
        email: 'kursuskuy@gmail.com',
        password: 'password',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'ihsankeren',
        email: 'ihsankeren@gmail.com',
        password: 'password',
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
