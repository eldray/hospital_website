const mongoose = require('mongoose');

const searchResultSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
});

const SearchResult = mongoose.model('SearchResult', searchResultSchema);

module.exports = SearchResult;
