'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: String,
  info: String,
  price: Number,
  active: Boolean
});

module.exports = mongoose.model('Ingredient', IngredientSchema);