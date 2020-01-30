'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class UserCourse extends Model {}

  UserCourse.init({
    UserId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER
  }, {sequelize});
  UserCourse.associate = function(models) {
    // associations can be defined here
  };
  return UserCourse;
};