const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({
        message: 'Необходима авторизация',
        auth: authorization
      });
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? process.env.NODE_JWT_SECRET : 'dev-secret');//
  } catch (err) {
    return res
      .status(401)
      .send({
        message: 'Необходима авторизация',
        auth: authorization
    });
  }

  req.user = payload;

  next();
};