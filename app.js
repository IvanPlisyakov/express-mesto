require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerCards = require('./routes/cards.js');
const routerUsers = require('./routes/users.js');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/not-found-err');
const { errors, celebrate, Joi } = require('celebrate');
const {auth} = require('./middlewares/auth.js');
const {login, createUsers} = require('./controllers/users');
var cors = require('cors');
const path = require('path');


const { PORT = 3001 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required().min(8),
  }),
}),createUsers);
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required().min(8),
  }),
}),login);
app.use('/users', auth, routerUsers);
app.use('/cards', auth, routerCards);
app.use((req, res, next) => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
  .status(statusCode)
  .send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
