const Sequelize = require('sequelize');

const db = new Sequelize(process.env.url, {
  define: {
    timestamps: false,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = { db };
