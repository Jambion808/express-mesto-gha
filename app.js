const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use((req, res, next) => {
  req.user = {
    _id: '6452e894f1a039000ec14bf8',
  };

  next();
});

app.use('/', routes);
app.listen(PORT, () => console.log('App listening on port {PORT}'));