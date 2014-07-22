'use strict';

angular.module('recipeApp')
  .factory('Recept', function ($resource) {
    return $resource('/api/recipes/:id', {id: '@id'});
  });
