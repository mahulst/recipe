'use strict';

angular.module('recipeApp')
  .controller('IngredientenListCtrl', function ($scope, Ingredient) {
  	$scope.ingredients = Ingredient.query();

  	$scope.deleteIngredient = function (ingredient){
  		$scope.ingredients = _.filter($scope.ingredients, function(item) {
  			return item._id !== ingredient._id;
  		});
  		Ingredient.delete({id:ingredient._id});
  	};
  });
