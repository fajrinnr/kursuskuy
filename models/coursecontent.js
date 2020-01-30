'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseContent = sequelize.define('CourseContent', {
    content: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  CourseContent.associate = function(models) {
    // associations can be defined here
  };
  return CourseContent;
};