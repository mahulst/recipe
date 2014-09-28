'use strict';

angular.module('recipeApp')
  .controller('BoodschappenListCtrl', function ($scope, BoodschappenLijst) {
    $scope.message = 'Hello';
        $scope.lists = BoodschappenLijst.query();
  });
