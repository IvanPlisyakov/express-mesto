const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, updateInfoProfile, updateAvatarProfile, getProfile, getUser
} = require('../controllers/users');


router.get('/users', getUsers);
router.get('/users/me', getUser);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2),
  }),
}),updateInfoProfile);
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().min(2),
  }),
}),updateAvatarProfile);
router.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().min(2),
  }).unknown(true),
}),getProfile);

module.exports = router;
