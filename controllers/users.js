const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => { res.status(200).send(users); })
    .catch(() => res.status(404).send({ message: 'Произошла ошибка при выдаче всех пользователей' }));
};

const updateInfoProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'Данные об информации профиля не пришли' });
      }

      return res.send({ data: user });
    })
    .catch(() => res.status(404).send({ message: 'Произошла ошибка при изменении данных профиля' }));
};

const updateAvatarProfile = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'Данные об аватаре профиля не пришли' });
      }

      return res.send({ data: user });
    })
    .catch(() => res.status(404).send({ message: 'Произошла ошибка' }));
};

const createUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Даннные о новом пользователе не пришли' });
      }

      return res.send({ data: user });
    })
    .catch(() => {
      res.status(400).send({ message: 'Произошла ошибка при создании пользователя' });
    });
};

const getProfile = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Пользователя не существует' });
      }

      return res.send({ data: user });
    })
    .catch(() => { res.status(400).send({ message: 'Произошла ошибка при получении информации о пользователе' }); });
};

module.exports = {
  getUsers, updateInfoProfile, updateAvatarProfile, getProfile, createUsers,
};
