'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize     = sequelize.Sequelize
  const Model         = Sequelize.Model
  const hashPassword  = require('./../helpers/hashPasword');

  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username is Empty.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Enter Your Email Correctly.'
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {sequelize,
    hooks: {
      beforeCreate(instance, options){
        instance.role     = 'member';
        instance.password = hashPassword(instance.password);

      }
    }
  });
  User.associate = function(models) {
    User.belongsToMany(models.Course, {through: 'UserCourse'})
  };
  return User;
};