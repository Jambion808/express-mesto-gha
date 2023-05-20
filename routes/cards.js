const cardsRouter = require('express').Router();

const {
  getCards, createCards, deleteCards, likeCard, dislikeCard,
} = require('../controllers/cards');

const { validCreateCard, validCardId } = require('../middlewares/validation');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', validCreateCard, createCards);
cardsRouter.delete('/cards/:cardId', validCardId, deleteCards);
cardsRouter.put('/cards/:cardId/likes', validCardId, likeCard);
cardsRouter.delete('/cards/:cardId/likes', validCardId, dislikeCard);

module.exports = cardsRouter;