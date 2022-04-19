const Router = require('express');

const authController = require('../controllers/auth');

const route = new Router();
route.get('/signin', (req, res) => {
  res.render('../front/views/registration', { form: {}, errors: {} });
});
route.post('/', authController.registration);

module.exports = route;
