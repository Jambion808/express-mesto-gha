const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthError = require('../errors/unauth-error');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      default: 'Жак-Ив Кусто',
      minlength: [2, 'Минимальня длинна поля "name" - 2'],
      maxlength: [30, 'Максимальная длинна поля "name" - 30'],
    },
    about: {
      type: String,
      required: false,
      default: 'Исследователь',
      minlength: [2, 'Минимальня длинна поля "about" - 2'],
      maxlength: [30, 'Максимальная длинна поля "about" - 30'],
    },
    avatar: {
      type: String,
      required: false,
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
      validate: {
        validator: (v) => validator.isURL(v),
        message: 'Введен некорректный URL',
      },
    },
    email: {
      type: String,
      required: [true, 'Заполните поле "email"'],
      unique: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'Введен некорректный email',
      },
    },
    password: {
      type: String,
      required: [true, 'Заполните поле "password"'],
      minlength: [8, 'Минимальня длинна поля "password" - 8'],
      select: false,
    },
  },
  { versionKey: false },
);

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthError('Неправельные почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthError('Неправельные почта или пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);