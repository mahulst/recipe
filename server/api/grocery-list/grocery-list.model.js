'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroceryListSchema = new Schema({
  name: String,
  info: String,
  recepten: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
  }],
  active: Boolean
});

module.exports = mongoose.model('GroceryList', GroceryListSchema);