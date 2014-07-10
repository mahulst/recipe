'use strict';

angular.module('recipeApp')
  .controller('BoodschappenViewCtrl', function ($scope, $stateParams) {
    //only show detail view when list is selected
    $scope.showDetail = false;
    if($stateParams.id) {
    	$scope.showDetail = true;
    }
  });
