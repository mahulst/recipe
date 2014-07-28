'use strict';

angular.module('recipeApp')
  .factory('Ingredient', function ($resource) {
    var resource = $resource('/api/ingredients/:id/:queryString', {id:'@id', queryString: '@queryString'}, {
    	model: {
  			method: 'GET',
  			params: {
  				id: 'model'
  			},
    	},
      string: {
        method: 'GET',
        params: {
          id: 'string'
        },
        isArray: true
      }
    });
    //public API
    return resource;
  });
