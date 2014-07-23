'use strict';

angular.module('recipeApp')
  .controller('IngredientenListCtrl', function ($scope, Ingredient) {
  	$scope.ingredients = Ingredient.query();

  	$scope.deleteIngredient = function (id){
  		$scope.ingredients = _.filter($scope.ingredients, function(item) {
  			return item.id !== id;
  		});
  		Ingredient.delete({id:id});
  	};
  });
