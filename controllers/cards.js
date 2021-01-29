const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => { res.status(200).send(cards.reverse()); })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  console.log(req.user)
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Данные карточки не пришли');
      }

      return res.send(card);
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      if(String(card.owner) !== req.user._id) {
        throw new NotFoundError('Нельзя удалять чужие карточки');
      }

      Card.findByIdAndRemove(req.params.id)
        .then(() => {
          return res.send({ data: card });
        })
    })
    .catch(next);
};

// лайки

const addLikeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
)
  .then((card) => {
    if (!card) {
      throw new NotFoundError('Карточка не найдена' );
    }
    return res.send({ data: card });
  })
  .catch(next);

const removeLikeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
)
  .then((card) => {
    if (!card) {
      throw new NotFoundError('Карточка не найдена');
    }
    return res.send({ data: card });
  })
  .catch(next);

module.exports = {
  getCards, createCard, deleteCard, addLikeCard, removeLikeCard,
};
