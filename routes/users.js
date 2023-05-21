const usersRouter = require('express').Router();

const {
  getUsers, getUserId, getUser, updateProfile, updateAvatar,
} = require('../controllers/users');

const { validUpdateAvatar, validUpdateProfile, validUserId } = require('../middlewares/validation');

usersRouter.get('/', getUsers);
usersRouter.get('/me', getUser);
usersRouter.get('/:userId', validUserId, getUserId);
usersRouter.patch('/me', validUpdateProfile, updateProfile);
usersRouter.patch('/me/avatar', validUpdateAvatar, updateAvatar);

module.exports = usersRouter;