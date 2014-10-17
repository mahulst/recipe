/**
 * Broadcast updates to client when the model changes
 */

'use strict';
var GroceryList = require('./grocery-list.model');

exports.register = function(socket) {
  GroceryList.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  GroceryList.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
    //TODO: duplicate function. make function that returns a promise that can be used oin both locations
    GroceryList.findById(doc._id)
        .populate('recepten gotIngredients')
        .exec(function (err, groceryList) {
            var options = {
                path: 'recepten.ingredients.ingredient',
                model: 'Ingredient'
            };
            GroceryList.populate(groceryList, options, function (err, groceryList) {

                socket.emit('grocery-list:save', groceryList);

            });
        });
}

function onRemove(socket, doc, cb) {
  socket.emit('grocery-list:remove', doc);
}