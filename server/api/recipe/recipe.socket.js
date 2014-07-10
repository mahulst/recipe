/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Recipe = require('./recipe.model');

exports.register = function(socket) {
  Recipe.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Recipe.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('recipe:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('recipe:remove', doc);
}