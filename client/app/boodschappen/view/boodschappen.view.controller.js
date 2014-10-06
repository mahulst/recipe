'use strict';

angular.module('recipeApp')
  .controller('BoodschappenViewCtrl', function ($scope, $stateParams, BoodschappenLijst) {

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
            $scope.ingredients = BoodschappenLijst.listIngredients($scope.list);
        });
    } else {
        $scope.list = BoodschappenLijst.getCurrentList();
        $scope.ingredients = BoodschappenLijst.listIngredients($scope.list);
    }

    $scope.addNewList = function (list) {
        list.date = new Date();
        BoodschappenLijst.saveList(list);
    };
  });
