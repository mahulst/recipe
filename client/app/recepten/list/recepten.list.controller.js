'use strict';

angular.module('recipeApp')
  .controller('ReceptenListCtrl', function ($scope, Recept, BoodschappenLijst) {
    $scope.recipes = Recept.query();

    $scope.addToNewGroceryList = function (recept) {
        BoodschappenLijst.addRecipeToList(recept);
    };
  });
