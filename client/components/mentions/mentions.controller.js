'use strict';

angular.module('recipeApp')
  .controller('MentionsCtrl', function ($scope) {
    $scope.visible = true;
    	$scope.position = {
    		x: 10,
    		y: 100
    	}
    $scope.setVisible = function (bool) {
        $scope.visible = bool;
    };
    $scope.setPosition = function (x,y) {
    	$scope.position.x = x;
    	$scope.position.y = y;
    };

    $scope.hashCheck = function (text) {
        var hashRegEx = new RegExp(/\B#\w*[a-zA-Z]+\w*/);

        if(text.match(hashRegEx)){
            var hashCheck = text.match(hashRegEx);
            return hashCheck[0];
        }
    };

    function openIngredientPopup (hash) {
        console.log(hash);
    }
  });
