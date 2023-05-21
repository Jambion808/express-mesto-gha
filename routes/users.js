const usersRouter = require('express').Router();

const {
  getUsers, getUser, getUserId, updateProfile, updateAvatar,
} = require('../controllers/users');

const { validUserId, validUpdateProfile, validUpdateAvatar } = require('../middlewares/validation');

usersRouter.get('/', getUsers);
usersRouter.get('/me', getUser);
usersRouter.get('/:userId', validUserId, getUserId);
usersRouter.patch('/me', validUpdateProfile, updateProfile);
usersRouter.patch('/me/avatar', validUpdateAvatar, updateAvatar);

module.exports = usersRouter;