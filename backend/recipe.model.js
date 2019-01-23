const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
let Recipe = new Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  recipe: {
    type: String
  }
},{
    collection: 'Recipe'
});

module.exports = mongoose.model('Recipe', Recipe);
