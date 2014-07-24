'use strict';

angular.module('recipeApp')
  .factory('Ingredient', function ($resource) {
    var resource = $resource('/api/ingredients/:id', {id:'@id'}, {
    	model: {
			method: 'GET',
			params: {
				id: 'model'
			}
    	}
    });
    //public API
    return resource;
  });
