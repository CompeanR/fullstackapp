'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  class Course extends Model {}
  Course.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A title is required'
        },
        notEmpty: {
          msg: 'Please provide a title'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A description is required'
        },
        notEmpty: {
          msg: 'Please provide a description'
        }
      }
    },
    estimatedTime: {
      type: DataTypes.STRING,
    },
    materialsNeeded: {
      type: DataTypes.STRING,
    },
  }, { sequelize });

  Course.associate = (models) => {
    Course.belongsTo(models.User, {
      as: 'user', // alias.
      foreignKey: {
        fieldName: 'userId'
      },
    });
  };

  return Course;
};

