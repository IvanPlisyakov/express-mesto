const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, createCard, deleteCard, addLikeCard, removeLikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2),
    link: Joi.string().required().min(2),
  }),
}),createCard);
router.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().min(2),
  }).unknown(true),
}),deleteCard);
router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().min(2),
  }).unknown(true),
}),addLikeCard);
router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().min(2),
  }).unknown(true),
}),removeLikeCard);

module.exports = router;
