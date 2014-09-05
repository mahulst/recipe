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
    $scope.hashCheck = function (step) {
        var hashRegEx = new RegExp(/\B#\w*[a-zA-Z]+\w*/);

        if(step.text.match(hashRegEx)){
            var hashCheck = step.text.match(hashRegEx)
            openIngredientPopup(hashCheck[0]);
        }
    }

    function openIngredientPopup (hash) {
        
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
