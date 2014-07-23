'use strict';

angular.module('recipeApp')
  .controller('IngredientenListCtrl', function ($scope, Ingredient) {
  	$scope.ingredients = Ingredient.query();

  	$scope.deleteIngredient = function (id){
  		Ingredient.delete({id:id});
  	};
  });
