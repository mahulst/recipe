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
  socket.emit('grocery-list:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('grocery-list:remove', doc);
}