const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, createCard, deleteCard, addLikeCard, removeLikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2),
    link: Joi.string().required().min(2).regex(/https?:\/\/w{0,3}[a-z0-9-._~:/?#[\]@!$&'()*+,;=]*#?/),
  }),
}),createCard);
router.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().min(24).max(24).hex(),
  }).unknown(true),
}),deleteCard);
router.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().min(24).max(24).hex(),
  }).unknown(true),
}),addLikeCard);
router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().min(24).max(24).hex(),
  }).unknown(true),
}),removeLikeCard);

module.exports = router;
