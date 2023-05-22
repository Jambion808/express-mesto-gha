const jwt = require('jsonwebtoken');
const UnauthError = require('../errors/unauth-error');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthError('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'a513d6f29041766e177181287fcea85931db6532de28ca20ad152a19a6090576');
  } catch (err) {
    throw new UnauthError('Необходима авторизация');
  }
  req.user = payload;
  return next();
};