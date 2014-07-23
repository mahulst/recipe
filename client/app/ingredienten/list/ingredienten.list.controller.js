'use strict';

angular.module('recipeApp')
  .controller('IngredientenListCtrl', function ($scope, Ingredient) {
  	$scope.ingredients = Ingredient.query();
  });
