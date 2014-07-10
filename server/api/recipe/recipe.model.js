'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  persons: Number,
  cookingTime: Number,
  preparingTime: Number,
  type: String,
  ingredients: [{
  	unit: String,
  	amount: Number,
  	ingredient: {
  		type: Schema.Types.ObjectId,
  		ref: 'Ingredient'
  	}
  }],
  tags: [{
  	type: Schema.Types.ObjectId,
  	ref: 'Tags'
  }],
  active: Boolean
});

module.exports = mongoose.model('Recipe', RecipeSchema);