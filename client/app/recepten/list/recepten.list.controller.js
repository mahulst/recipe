'use strict';

angular.module('recipeApp')
  .controller('ReceptenListCtrl', function ($scope, Recept) {
    $scope.recipes = Recept.query();

    $scope.addToNewGroceryList = function (recept) {

    };
  });
