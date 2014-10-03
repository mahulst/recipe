'use strict';

angular.module('recipeApp')
  .controller('BoodschappenListCtrl', function ($scope, BoodschappenLijst) {
    $scope.lists = BoodschappenLijst.query();
  });
