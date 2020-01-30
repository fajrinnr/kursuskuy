'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserCourses', [
      {
        UserId: 2,
        CourseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        CourseId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        CourseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserCourses', null, {});
  }
};
