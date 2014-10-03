'use strict';

angular.module('recipeApp')
  .controller('ReceptenAddFinalCtrl', function ($scope, Ingredient, Recept) {
    $scope.recipe = $scope.recipe || {};
    if(!$scope.recipe.ingredients) {
        $scope.recipe.ingredients = [];
    }
    angular.forEach($scope.recipe.steps, function (step) {
        angular.forEach(step.ingredients, function (ingredient) {
            var ingredientAlreadyInArray = $scope.recipe.ingredients.filter(function( obj ) {
                return obj.ingredient._id === ingredient._id;
            });
           if (ingredientAlreadyInArray.length === 0) {
               $scope.recipe.ingredients.push({ingredient:ingredient});
           }
        });
    });
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

    $scope.saveRecipe = function () {
        var recipe = new Recept($scope.recipe);
        recipe.$save();
    };
  });
