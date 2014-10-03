'use strict';

angular.module('recipeApp')
  .controller('ReceptenViewCtrl', function ($scope, Recept, $stateParams) {
        $scope.recipe = Recept.get({id: $stateParams.id});
  });
