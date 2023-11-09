// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/folder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
