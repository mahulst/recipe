'use strict';

var _ = require('lodash'),
  mongoose = require('mongoose'),
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
  	ref: 'Tag'
  }],
  active: Boolean
});

RecipeSchema.
  virtual('calculatedPrice')
  .get(function () {
    var total = 0;
    _.each(this.ingredients, function (row) {
      total += row.ingredient.price;
    });
    return total;
  });
module.exports = mongoose.model('Recipe', RecipeSchema);