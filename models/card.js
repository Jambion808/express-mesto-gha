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
    link: {
      type: String,
      required: [true, 'Заполните поле "link"'],
      validate: {
        validator: (v) => validator.isURL(v),
        message: 'Введен некорректный URL',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('card', useSchema);