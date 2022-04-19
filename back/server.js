const express = require('express');
require('dotenv').config({ path: `${__dirname}/../.env` });

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const authRouter = require('./routers/auth');

app.use(cors());
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/users', authRouter);

const port = process.env.SERVER_PORT;

app.listen(port, (err) => {
  if (err) {
    return err;
  }
  return console.log(`Сервер запущен: порт ${port}`);
});
