const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /https?:\/\/w{0,3}[a-z0-9\-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=]*#?\ */gi;
        const state = regex.test(v);
        return regex.lastIndex === v.length;
      },
      message: 'Неправильная ссылка на аватар.',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
