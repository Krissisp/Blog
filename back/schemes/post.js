const Sequelize = require('sequelize');
const { db } = require('../db');
// const User = require('./user');

const Posts = db.define('posts', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  message: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  author: {
    type: Sequelize.INTEGER,
    references: 'users',
    referencesKey: 'id',
  },
  published_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});
// Posts.belongsTo(User, { as: 'user', foreignKey: 'author' });
module.exports = Posts;
