const cardsRouter = require('express').Router();

const {
  getCards, createCards, deleteCards, likeCard, dislikeCard,
} = require('../controllers/cards');

const { validCreateCard, validCardId } = require('../middlewares/validation');

cardsRouter.get('/', getCards);
cardsRouter.post('/', validCreateCard, createCards);
cardsRouter.delete('/:cardId', validCardId, deleteCards);
cardsRouter.put('/:cardId/likes', validCardId, likeCard);
cardsRouter.delete('/:cardId/likes', validCardId, dislikeCard);

module.exports = cardsRouter;