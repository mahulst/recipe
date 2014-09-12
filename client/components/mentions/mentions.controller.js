'use strict';

angular.module('recipeApp')
  .controller('MentionsCtrl', function ($scope, Ingredient) {
    var setPosition;
    $scope.result = [];
    $scope.visible = false;
    $scope.position = {
        x: 10,
        y: 100
    }
    $scope.open = function (position) {
        if($scope.visible !== true){
            $scope.selectIndex = 0;
            setPosition(position.left, position.top + 18);
            $scope.visible = true;
            $scope.$digest();
        }
    };
    $scope.close = function () {
        $scope.visible = false;
        $scope.$digest();
    }

    $scope.query = function (hash) {
        var query = hash.substring(1, hash.length);
        $scope.result = Ingredient.string({queryString: query});
        $scope.result.$promise.then(function () {
            if ($scope.result.length <= $scope.selectIndex) {
                $scope.selectIndex = $scope.result.length - 1;
            }
        });
    };

    setPosition = function (x,y) {
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

    $scope.selectUp = function () {
        $scope.selectIndex -= 1;
        if($scope.selectIndex < 0) {
            $scope.selectIndex = $scope.result.length - 1;
        }
        console.log($scope.selectIndex);
    };
    $scope.selectDown = function () {
        $scope.selectIndex += 1;
        if($scope.result.length <= $scope.selectIndex) {
            $scope.selectIndex = 0;
        }
        console.log($scope.selectIndex);
    };
  });
