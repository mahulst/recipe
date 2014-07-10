'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: {
  	type: String,
  	required: true
  },
  info: String,
  locationGroup: Number, 
  price: Number,
  active: Boolean
});

IngredientSchema
  .path('name')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({name: value}, function(err, ingredient) {
      if(err) throw err;
      if(ingredient) {
        if(self.id === ingredient.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'This ingredient already exists');

module.exports = mongoose.model('Ingredient', IngredientSchema);