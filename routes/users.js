const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, updateInfoProfile, updateAvatarProfile, getProfile, getUser
} = require('../controllers/users');


router.get('/', getUsers);
router.get('/me', getUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2),
  }),
}),updateInfoProfile);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/https?:\/\/w{0,3}[a-z0-9-._~:/?#[\]@!$&'()*+,;=]*(gif|jpg|jpeg|tiff|png)\s*$/gi),
  }),
}),updateAvatarProfile);
router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().min(24).max(24).hex(),
  }).unknown(true),
}),getProfile);

module.exports = router;
