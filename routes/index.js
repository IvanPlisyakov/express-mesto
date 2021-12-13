const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  login, createUsers,
} = require('../controllers/users');
const { auth } = require('../middlewares/auth.js');
const routerCards = require('./cards.js');
const routerUsers = require('./users.js');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required().min(8),
  }),
}), createUsers);
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required().min(8),
  }),
}), login);
router.use('/cards', auth, routerCards);
router.use('/users', auth, routerUsers);
//router.use(/\//, auth);

module.exports = router;
