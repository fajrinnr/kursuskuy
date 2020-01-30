'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model {}

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {sequelize});
  User.associate = function(models) {
    User.belongsToMany(models.Course, {through: 'UserCourse'})
  };
  return User;
};