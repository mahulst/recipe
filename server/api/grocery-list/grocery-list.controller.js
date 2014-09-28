'use strict';

var _ = require('lodash');
var GroceryList = require('./grocery-list.model');

// Get list of grocery-lists
exports.index = function(req, res) {
  GroceryList.find(function (err, groceryList) {
    if(err) { return handleError(res, err); }
    return res.json(200, groceryList);
  });
};

// Get a single grocery-list
exports.show = function(req, res) {
  GroceryList.findById(req.params.id, function (err, groceryList) {
    if(err) { return handleError(res, err); }
    if(!groceryList) { return res.send(404); }
    return res.json(groceryList);
  });
};

// Creates a new grocery-list in the DB.
exports.create = function(req, res) {
  GroceryList.create(req.body, function(err, groceryList) {
    if(err) { return handleError(res, err); }
    return res.json(201, groceryList);
  });
};

// Updates an existing grocery-list in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GroceryList.findById(req.params.id, function (err, groceryList) {
    if (err) { return handleError(res, err); }
    if(!groceryList) { return res.send(404); }
    var updated = _.merge(groceryList, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, groceryList);
    });
  });
};

// Deletes a grocery-list from the DB.
exports.destroy = function(req, res) {
  GroceryList.findById(req.params.id, function (err, groceryList) {
    if(err) { return handleError(res, err); }
    if(!groceryList) { return res.send(404); }
      groceryList.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}