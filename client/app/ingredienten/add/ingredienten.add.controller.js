'use strict';

angular.module('recipeApp')
  .controller('IngredientenAddCtrl', function ($scope, Ingredient) {
    $scope.ingredientModel = Ingredient.model();
  });
