const router = require('express').Router();
const {
  getUsers, updateInfoProfile, updateAvatarProfile, getProfile, createUsers,
} = require('../controllers/users');

router.get('/users', getUsers);
router.post('/users', createUsers);
router.patch('/users/me', updateInfoProfile);
router.patch('/users/me/avatar', updateAvatarProfile);
router.get('/users/:id', getProfile);

module.exports = router;
