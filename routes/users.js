const usersRouter = require('express').Router();

const {
  getUsers, getUserId, getUser, updateProfile, updateAvatar,
} = require('../controllers/users');

const { validUpdateAvatar, validUpdateProfile, validUserId } = require('../middlewares/validation');

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:userId', validUserId, getUserId);
usersRouter.get('/users/me', getUser);
usersRouter.patch('/users/me', validUpdateProfile, updateProfile);
usersRouter.patch('/users/me/avatar', validUpdateAvatar, updateAvatar);

module.exports = usersRouter;