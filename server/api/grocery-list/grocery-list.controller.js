'use strict';

var _ = require('lodash');
var GroceryList = require('./grocery-list.model');

// Get list of grocery-lists
exports.index = function(req, res) {
  GroceryList.find(function (err, grocery-lists) {
    if(err) { return handleError(res, err); }
    return res.json(200, grocery-lists);
  });
};

// Get a single grocery-list
exports.show = function(req, res) {
  GroceryList.findById(req.params.id, function (err, grocery-list) {
    if(err) { return handleError(res, err); }
    if(!grocery-list) { return res.send(404); }
    return res.json(grocery-list);
  });
};

// Creates a new grocery-list in the DB.
exports.create = function(req, res) {
  GroceryList.create(req.body, function(err, grocery-list) {
    if(err) { return handleError(res, err); }
    return res.json(201, grocery-list);
  });
};

// Updates an existing grocery-list in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GroceryList.findById(req.params.id, function (err, grocery-list) {
    if (err) { return handleError(res, err); }
    if(!grocery-list) { return res.send(404); }
    var updated = _.merge(grocery-list, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, grocery-list);
    });
  });
};

// Deletes a grocery-list from the DB.
exports.destroy = function(req, res) {
  GroceryList.findById(req.params.id, function (err, grocery-list) {
    if(err) { return handleError(res, err); }
    if(!grocery-list) { return res.send(404); }
    grocery-list.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}