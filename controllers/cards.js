const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => { res.status(200).send(cards); })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Данные карточки не пришли' });
      }

      return res.send({ data: card });
    })
    .catch(() => res.status(400).send({ message: 'Произошла ошибка при создании карточки' }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Карточка не найдена' });
      }
      return res.send({ data: card });
    })
    .catch(() => { res.status(400).send({ message: 'Произошла ошибка при удалении карточки' }); });
};

// лайки

const addLikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
)
  .then((card) => {
    if (!card) {
      return res.status(404).send({ message: 'Карточка не найдена' });
    }
    return res.send({ data: card });
  })
  .catch(() => { res.status(400).send({ message: 'Произошла ошибка при лайке карточки' }); });

const removeLikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
)
  .then((card) => {
    if (!card) {
      return res.status(404).send({ message: 'Карточка не найдена' });
    }
    return res.send({ data: card });
  })
  .catch(() => { res.status(404).send({ message: 'Произошла ошибка при убирании лайка' }); });

module.exports = {
  getCards, createCard, deleteCard, addLikeCard, removeLikeCard,
};
