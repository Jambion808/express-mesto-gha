const cardsRouter = require('express').Router();

const {
  getCards, createCards, deleteCards, likeCard, dislikeCard,
} = require('../controllers/cards');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', createCards);
cardsRouter.delete('/cards/:cardId', deleteCards);
cardsRouter.put('/cards/:cardId/likes', likeCard);
cardsRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRouter;