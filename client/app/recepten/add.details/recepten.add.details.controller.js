'use strict';

angular.module('recipeApp')
  .controller('ReceptenAddDetailsCtrl', function ($scope, Ingredient) {
    $scope.message = 'Hello';
    $scope.fetchIngredientsByQuery = function (query) {
    	var promise;
    	if(query !== '') {
	    	var deferred = Ingredient.string({queryString: query});
	    	promise = deferred.$promise;
	    } else {
	    	//return empty promise 
	    	promise = {then: function () {}} 
	    }
	    return promise;
    };
  });
