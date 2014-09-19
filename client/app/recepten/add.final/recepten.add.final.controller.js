'use strict';

angular.module('recipeApp')
  .controller('ReceptenAddFinalCtrl', function ($scope, Ingredient) {
    $scope.recipe = $scope.recipe || {};
    if(!$scope.recipe.ingredients) {
        $scope.recipe.ingredients = [];
        angular.forEach($scope.recipe.steps, function (step) {
            angular.forEach(step.ingredients, function (ingredient) {
                var ingredientAlreadyInArray = $scope.recipe.ingredients.filter(function( obj ) {
                    return obj.ingredient._id === ingredient._id;
                });
               if (ingredientAlreadyInArray) {
                   $scope.recipe.ingredients.push({ingredient:ingredient});
               }
            });
        });
    }
    $scope.fetchIngredientsByQuery = function (query) {
        var promise;
        if(query !== '') {
            var deferred = Ingredient.string({queryString: query});
            promise = deferred.$promise;
        } else {
            //return empty promise
            promise = {then: function () {}};
        }
        return promise;
    };

    $scope.addIngredient = function () {
        $scope.recipe.ingredients.push({});
    };
  });
