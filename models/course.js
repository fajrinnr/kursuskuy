'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Course extends Model {}

  Course.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {sequelize});

  Course.associate = function(models) {
    Course.belongsToMany(models.User, {through: 'UserCourse'})
    Course.hasMany(models.CourseContent)
  };
  return Course;
};