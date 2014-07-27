'use strict';

angular.module('recipeApp')
  .controller('ReceptenAddCtrl', function ($scope, Recept) {
    $scope.recipe = {};

    $scope.saveRecipe = function (recipe) {
    	Recept.save(recipe);
    };
  });
