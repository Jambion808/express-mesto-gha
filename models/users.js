const mongoose = require('mongoose');
const validator = require('validator');

const useSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Заполните поле "name"'],
      minlength: [2, 'Минимальня длинна поля "name" - 2'],
      maxlength: [30, 'Максимальная длинна поля "name" - 30'],
    },
    about: {
      type: String,
      required: [true, 'Заполните поле "about"'],
      minlength: [2, 'Минимальня длинна поля "about" - 2'],
      maxlength: [30, 'Максимальная длинна поля "about" - 30'],
    },
    avatar: {
      type: String,
      required: [true, 'Заполните поле "avatar"'],
      validate: {
        validator: (v) => validator.isURL(v),
        message: 'Введен некорректный URL',
      },
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('user', useSchema);