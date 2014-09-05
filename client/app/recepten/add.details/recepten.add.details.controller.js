'use strict';

angular.module('recipeApp')
  .controller('ReceptenAddDetailsCtrl', function ($scope) {
    $scope.recipe = $scope.recipe || {};
    if(!$scope.recipe.steps) {
        $scope.recipe.steps = [];
        $scope.lastEntry = {
            id: 0,
            text:'',
            ingredients: []
        };
        $scope.recipe.steps.push($scope.lastEntry);
    } else {
        $scope.lastEntry = $scope.recipe.steps[$scope.recipe.steps.length - 1];
    }


    //adding a new step if last step is filled out
    $scope.$watch('lastEntry.text', function (newVal, oldVal) {
        if(newVal !== '') {
            $scope.lastEntry = {
                id: $scope.recipe.steps.length,
                text: '',
                ingredients: []
            };
            $scope.recipe.steps.push($scope.lastEntry);
        }
    });
  });
