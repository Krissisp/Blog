const ValidationErrorItem = require('sequelize');
const crypto = require('../hash');
const Users = require('../schemes/users');
const createUser = require('../services/auth/createUser');

class Auth {
  registration = async function registration(req, res) {
    try {
      const { nickname, password } = req.body;
      console.log('password', password.length);
      const hashPassword = await crypto(password);
      await createUser(nickname, hashPassword);
      res.status(200).json({});
    } catch (error) {
      // console.log(error);
      res.status(400).render('../front/views/registration', { form: {}, errors: error.errors[0].message });
    }
  };

  autorization = async function autorization(req, res) {

  };
}

module.exports = new Auth();
