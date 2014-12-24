'use strict';

angular.module('recipeApp')
  .controller('ReceptenViewCtrl', function ($scope, Recept, $stateParams, $state) {
    $scope.recipe = Recept.get({id: $stateParams.id});

  });
