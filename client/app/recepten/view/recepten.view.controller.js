'use strict';

angular.module('recipeApp')
  .controller('ReceptenViewCtrl', function ($scope, Recept, $stateParams) {
        $scope.message = 'Hello';
        $scope.recipe = Recept.get({id: $stateParams.id})
  });
