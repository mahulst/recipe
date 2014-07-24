'use strict';

angular.module('recipeApp')
  .controller('IngredientenAddCtrl', function ($scope, Ingredient) {
    $scope.ingredientModel = Ingredient.model();
    $scope.ingredientModel.$promise.then(function () {
    	delete $scope.ingredientModel.__v;
    });
  });
