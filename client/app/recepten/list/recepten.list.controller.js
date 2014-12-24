'use strict';

angular.module('recipeApp')
  .controller('ReceptenListCtrl', function ($scope, Recept, BoodschappenLijst, $state) {
    $scope.recipes = Recept.query();
    $scope.addToNewGroceryList = function (recept) {
        BoodschappenLijst.addRecipeToList(recept);
    };
    $scope.$state = $state;
  });
