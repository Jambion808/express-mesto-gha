const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const wrongRouter = require('./error');

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);
router.use('/*', wrongRouter);

module.exports = router;