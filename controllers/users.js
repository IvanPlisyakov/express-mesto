const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const NotFoundError = require('../errors/not-found-err');
//const { Console } = require('winston/lib/winston/transports');
require('dotenv').config();

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      console.log(user)
      const token = jwt.sign({ _id: user._id }, 'dev-secret' ,  { expiresIn: '7d' } );//process.env.NODE_ENV  === 'production' ? process.env.JWT_SECRET : 'dev-secret'

      res.send({token});
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }

      res.status(200).send(user)
    })
    .catch(next);
}

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => { res.status(200).send(users); })
    .catch(next);
};

const updateInfoProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, {new: true, runValidators: true})
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Данные об информации профиля не пришли');
      }

      res.status(200).send(user);
    })
    .catch(next);
};

const updateAvatarProfile = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, {new: true, runValidators: true})
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Данные об аватаре профиля не пришли');
      }

      return res.send(user);
    })
    .catch(next);
};

const createUsers = (req, res, next) => {
  const { email } = req.body;

  User.findOne({email: email})
    .then((user) => {
      if(!user) {
        return bcrypt.hash(req.body.password, 10)
        .then(hash => User.create({
          email: req.body.email,
          password: hash, // записываем хеш в базу
        }))
        .then((user) => {

          res.status(201).send(user)
        })
        .catch(next);
      }

      return res.status(409).send({ message: 'Пользователь с таким email уже существует' })
    })
    .catch(next);
};

const getProfile = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователя не существует');
      }

      return res.send(user);
    })
    .catch(next);
};

module.exports = {
  getUsers, updateInfoProfile, updateAvatarProfile, getProfile, createUsers, login, getUser
};

  /*const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Даннные о новом пользователе не пришли' });
      }

      return res.send({ data: user });
    })
    .catch(() => {
      res.status(400).send({ message: 'Произошла ошибка при создании пользователя' });
    });*/
