const path = require('path');
const getDataFromFile = require('../helpers/files');
const dataPath = path.join(__dirname, '..', 'data', 'users.json');
const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {res.status(200).send(users)})
    .catch(err => res.status(400).send({ message: 'Произошла ошибка при выдаче всех пользователей' }));
}

const updateInfoProfile = (req, res) => {
  const {name, about} = req.body;
  if( name && about) {
    User.findByIdAndUpdate(req.user._id, {name, about})
      .then(user => res.send({ data: user }))
      .catch(err => res.status(400).send({ message: 'Произошла ошибка при изменении данных профиля' }));
  } else {
    res.status(404).send({ message: 'Данные об информации профиля не пришли' })
  }

}

const updateAvatarProfile = (req, res) => {
  const {avatar} = req.body;
  if(avatar) {
    User.findByIdAndUpdate(req.user._id, {avatar})
    .then(user => res.send({ data: user }))
    .catch(err => res.status(400).send({ message: 'Произошла ошибка' }));
  } else {
    res.status(404).send({ message: 'Данные об аватаре профиля не пришли' })
  }

}

const createUsers = (req, res) => {
  const {name, about, avatar} = req.body;
  if(name, about, avatar) {
    User.create({name, about, avatar})
      .then((user) => {res.send({ data: user})})
      .catch((err) => {res.status(400).send({ message: 'Произошла ошибка при создании пользователя' })});
  } else {
    res.status(404).send({ message: 'Даннные о новом пользователе не пришли' })
  }

}

const getProfile = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ data: user }))
    .catch(err => res.status(400).send({ message: 'Произошла ошибка при получении информации о пользователе' }));
}

module.exports = { getUsers, updateInfoProfile, updateAvatarProfile, getProfile, createUsers };
