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

const routers = require('./routes/index.js');


const { PORT = 3001 } = process.env;

const app = express();

mongoose.connect('mongodb+srv://IvanPlisyakov:actiVision12@cluster-mesto.ndo6c.mongodb.net/mesto?retryWrites=true&w=majority', {// mongodb://localhost:27017/mestodb
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('mongo connected'))
  .catch((err) => {console.log(err)})

app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger);
/*app.get('/crash-test', () => {
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
});*/

//app.use('/api', routers);
app.use(express.static(path.join(__dirname, 'build')));

app.use('/signin', express.static(path.join(__dirname, 'build')));
app.use('/signup', express.static(path.join(__dirname, 'build')));




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
