'use strict';

angular.module('recipeApp')
  .controller('BoodschappenViewCtrl', function ($scope, $stateParams, BoodschappenLijst) {
    //only show detail view when list is selected
    $scope.showDetail = false;
    if($stateParams.id) {
    	$scope.showDetail = true;
    }
    $scope.currentList = BoodschappenLijst.getList();
    $scope.ingredients = listIngredients();
    function listIngredients() {
        var obj = {};
        angular.forEach($scope.currentList.recepten, function (recept) {
            angular.forEach(recept.ingredients, function (ingredient){
                if(!ingredient) {
                    return;
                }
                console.log(ingredient);
                if(!obj[ingredient.ingredient._id]){
                    obj[ingredient.ingredient._id] = {ingredient: ingredient.ingredient, amount: ingredient.amount};
                } else {
                    obj[ingredient.ingredient._id].amount += ingredient.amount;
                }
            });
        });
        return obj;
    };
  });
