const NODE_ENV=production;
const JWT_SECRET=e19fe2ba302acfd7cfbbe231ad6af3d50a9a2a9a80ea5033e0e704a00d967c27;
const jwt = require('jsonwebtoken');

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(!authorization || !authorization.startsWith('Bearer '))
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');//
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }

  req.user = payload;

  next();
};