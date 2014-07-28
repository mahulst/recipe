'use strict';

var _ = require('lodash');
var Ingredient = require('./ingredient.model');

// Get list of ingredients
exports.index = function(req, res) {
  Ingredient.find(function (err, ingredients) {
    if(err) { return handleError(res, err); }
    return res.json(200, ingredients);
  });
};
// Get model of ingredient
exports.model = function(req, res) {
  return res.json(200, Ingredient.schema.paths);
};
// Get array of ingredients by string
exports.queryByString = function(req, res) {
  var name = req.params.query;
  Ingredient.find({name:  new RegExp(name, "i")}, function (err, ingredients) {
    if(err) { return handleError(res, err); }
    return res.json(200, ingredients);
  });
};
// Get a single ingredient
exports.show = function(req, res) {
  Ingredient.findById(req.params.id, function (err, ingredient) {
    if(err) { return handleError(res, err); }
    if(!ingredient) { return res.send(404); }
    return res.json(ingredient);
  });
};

// Creates a new ingredient in the DB.
exports.create = function(req, res) {
  Ingredient.create(req.body, function(err, ingredient) {
    if(err) { return handleError(res, err); }
    return res.json(201, ingredient);
  });
};

// Updates an existing ingredient in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ingredient.findById(req.params.id, function (err, ingredient) {
    if (err) { return handleError(err); }
    if(!ingredient) { return res.send(404); }
    var updated = _.merge(ingredient, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, ingredient);
    });
  });
};

// Deletes a ingredient from the DB.
exports.destroy = function(req, res) {
  Ingredient.findById(req.params.id, function (err, ingredient) {
    if(err) { return handleError(res, err); }
    if(!ingredient) { return res.send(404); }
    ingredient.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}