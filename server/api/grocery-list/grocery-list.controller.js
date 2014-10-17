'use strict';

var _ = require('lodash');
var GroceryList = require('./grocery-list.model');
exports.getPopulatedList = getPopulatedList;
function getPopulatedList (id, res) {
    GroceryList.findById(id)
        .populate('recepten gotIngredients')
        .exec(function (err, groceryList) {
            var options = {
                path: 'recepten.ingredients.ingredient',
                model: 'Ingredient'
            };
            GroceryList.populate(groceryList, options, function (err, groceryList) {

                if(err) { return handleError(res, err); }
                if(!groceryList) { return res.send(404); }
                return res.json(groceryList);

            });
        });
}

// Get list of grocery-lists
exports.index = function(req, res) {
  GroceryList.find({})
      .populate('recepten')
      .exec(function (err, populatedGrocereLists) {
          if(err) { return handleError(res, err); }
          return res.json(200, populatedGrocereLists);
      });
};

// Get a single grocery-list
exports.show = function(req, res) {
    getPopulatedList(req.params.id, res);
};

// Creates a new grocery-list in the DB.
exports.create = function(req, res) {
    var list = req.body,
        recipeArr = [];

    //parse ingredients
    list.recepten.forEach(function (recept) {
        recept = recept._id;
        recipeArr.push(recept);
    });
    list.recepten = recipeArr;
  GroceryList.create(list, function(err, groceryList) {
    if(err) { return handleError(res, err); }
    return res.json(201, groceryList);
  });
};

// Updates an existing grocery-list in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
    var list = req.body,
        recipeArr = [],
        ingredientsArr = [];

    //depopulate ingredients
    list.recepten.forEach(function (recept) {
        recept = recept._id;
        recipeArr.push(recept);
    });
    list.recepten = recipeArr;

    list.gotIngredients.forEach(function (ingredient) {

        if(ingredientsArr.indexOf(ingredient._id) === -1) {
            ingredientsArr.push(ingredient._id);
        }
    });
    list.gotIngredients = ingredientsArr;
    GroceryList.findById(req.params.id, function (err, groceryList) {
    if (err) { return handleError(res, err); }
    if(!groceryList) { return res.send(404); }
    //clear gotIngredients to persist deleted elements
    groceryList.gotIngredients = [];
    var updated = _.merge(groceryList, list);
        console.log(updated);
    updated.markModified('gotIngredients');
    updated.save(function (err) {
        getPopulatedList(req.params.id, res);
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