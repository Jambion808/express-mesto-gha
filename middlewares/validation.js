const { celebrate, Joi } = require('celebrate');

const regExpLink = /(https?:\/\/)(w{3}\.)?\w+[-._~:/?#[]@!$&'()*,+;=]*#?/;

const validCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regExpLink),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(regExpLink),
  }),
});

const validUpdateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

const validUserId = celebrate({
  body: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
});

const validCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().required().pattern(regExpLink),
  }),
});

const validCardId = celebrate({
  body: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validCreateUser,
  validLogin,
  validUpdateAvatar,
  validUpdateProfile,
  validUserId,
  validCreateCard,
  validCardId,
};