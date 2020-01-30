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
        },
        isExist: function(value) {
          return User.count({ where: { username: value } })
            .then(count => {
              if (count != 0) {
                throw new Error('Username is already exist.');
              }
          });
        }
        
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Enter Your Email Correctly.'
        },
        isExist: function(value) {
          return User.count({ where: { email: value } })
            .then(count => {
              if (count != 0) {
                throw new Error('Email is already exist.');
              }
          });
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6,15],
          msg: 'Minimum password length is 6-15 characters'
        }
      }
    },
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