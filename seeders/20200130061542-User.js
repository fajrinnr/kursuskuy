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
      },
      {
        username: 'admin',
        email: 'admin@kursuskuy.id',
        password: '$2a$10$jVUktFMhTkB0vnqReinOXejd1irf3ESCtjqs5I.mrYVa3sb1R2DZa',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
