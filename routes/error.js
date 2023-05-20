const NotFoundError = require('../errors/not-found-error');

const wrongRouter = (req, res, next) => {
  next(new NotFoundError('По указанному адресу страница не найдена'));
};

module.exports = wrongRouter;