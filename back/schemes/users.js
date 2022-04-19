const Sequelize = require('sequelize');
const { db } = require('../db');

// class User extends Model {}
const Users = db.define('users', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  nickname:
  {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },

});
module.exports = Users;
