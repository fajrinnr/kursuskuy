'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CourseContents', [
      {
        content: 'Basic Javascript',
        link: 'youtube.com/basic-javascript',
        CourseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Syntax',
        link: 'youtube.com/syntax',
        CourseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Basic HTML',
        link: 'youtube.com/basic-html',
        CourseId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CourseContents', null, {});
  }
};
