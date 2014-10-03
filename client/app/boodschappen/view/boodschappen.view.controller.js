'use strict';

angular.module('recipeApp')
  .controller('BoodschappenViewCtrl', function ($scope, $stateParams, BoodschappenLijst) {
    function listIngredients() {
        var obj = {};
        angular.forEach($scope.list.recepten, function (recept) {
            angular.forEach(recept.ingredients, function (ingredient){
                if(!ingredient) {
                    return;
                }
                if(!obj[ingredient.ingredient._id]){
                    obj[ingredient.ingredient._id] = {ingredient: ingredient.ingredient, amount: ingredient.amount};
                } else {
                    obj[ingredient.ingredient._id].amount += ingredient.amount;
                }
            });
        });
        return obj;
    }
    //only show detail view when list is selected
    $scope.showDetail = false;
    $scope.getById = false;
    if($stateParams.id) {
    	$scope.showDetail = true;
        $scope.getById = $stateParams.id !== 'new';
    }
    if($scope.getById) {
        $scope.list = BoodschappenLijst.get({id: $stateParams.id});
        $scope.list.$promise.then(function (){
            $scope.ingredients = listIngredients();
        });
    } else {
        $scope.list = BoodschappenLijst.getCurrentList();
        $scope.ingredients = listIngredients();
    }


    $scope.addNewList = function (list) {
        BoodschappenLijst.saveList(list);
    };
  });
