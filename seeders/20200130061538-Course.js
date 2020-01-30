'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [
      {
        name: 'Introduction to Javascript',
        price: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Introduction to HTML',
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
