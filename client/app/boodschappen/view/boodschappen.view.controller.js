'use strict';

angular.module('recipeApp')
  .controller('BoodschappenViewCtrl', function ($scope, $stateParams, BoodschappenLijst) {
    //only show detail view when list is selected
    $scope.showDetail = false;
    var getById = false;
    if($stateParams.id) {
    	$scope.showDetail = true;
        getById = $stateParams.id !== 'new';
    }
    if(getById) {
        $scope.list = BoodschappenLijst.get({id: $stateParams.id});
        $scope.list.$promise.then(function (){
            $scope.ingredients = listIngredients();
        });
    } else {
        $scope.list = BoodschappenLijst.getCurrentList();
        $scope.ingredients = listIngredients();
    }
    function listIngredients() {
        var obj = {};
        angular.forEach($scope.list.recepten, function (recept) {
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
