const { NOT_FOUND } = require('../errors/errors');

const wrongRouter = (req, res) => {
  res.status(NOT_FOUND).send({ message: 'По указанному адресу страница не найдена' });
};

module.exports = wrongRouter;