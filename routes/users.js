const router = require('express').Router();
const {
  getUsers, updateInfoProfile, updateAvatarProfile, getProfile, createUsers, login
} = require('../controllers/users');

const {auth} = require('../middlewares/auth.js');

router.post('/signup', createUsers);
router.post('/signin', login);

router.use(auth);

router.get('/users', getUsers);
router.patch('/users/me', updateInfoProfile);
router.patch('/users/me/avatar', updateAvatarProfile);
router.get('/users/:id', getProfile);

module.exports = router;
