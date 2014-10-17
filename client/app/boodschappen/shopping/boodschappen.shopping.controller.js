'use strict';

angular.module('recipeApp')
    .controller('BoodschappenShoppingCtrl', function ($scope, BoodschappenLijst, $stateParams, socket) {
        var list = BoodschappenLijst.get({id: $stateParams.id});

        function processList () {
            $scope.doneArray = list.gotIngredients || [];
            $scope.neededArray = BoodschappenLijst.getNeededIngredients(list);
        }

        list.$promise.then(function () {
            socket.syncUpdates('grocery-list', list, processList);
            processList();
        });

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('list');
        });

        $scope.changeList = function () {
            $scope.doneArray.push($scope.neededArray[0].ingredient);
            list.$save();
        }
        $scope.addIngredient = function (ingredient) {
            if($scope.doneArray.indexOf(ingredient) === -1) {
                $scope.doneArray.push(ingredient);
            }
            list.$save();
        };
        $scope.removeIngredient = function (ingredient) {
            var index = $scope.doneArray.indexOf(ingredient);
            if(index > -1) {
                $scope.doneArray.splice(index, 1);
            }
            list.$save();
        };
    });
