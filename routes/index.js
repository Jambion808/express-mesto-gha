const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const errorRouter = require('./error');

router.use('/', usersRouter);
router.use('/', cardsRouter);
router.use('/*', errorRouter);

module.exports = router;