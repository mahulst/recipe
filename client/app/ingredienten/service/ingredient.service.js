'use strict';

angular.module('recipeApp')
  .factory('Ingredient', function ($resource) {
    return $resource('/api/ingredients/:id', {id:'@id'});
  });
