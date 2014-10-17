'use strict';

angular.module('recipeApp')
    .controller('BoodschappenShoppingCtrl', function ($scope, BoodschappenLijst, $stateParams, socket) {
        var list = BoodschappenLijst.get({id: $stateParams.id});

        //TODO: almost the same functionality as the function in boodschappenlijstservice
        var ingredientInList = function (list, ingredient) {
            var returnVal = -1;
            angular.forEach(list, function (listIngredient, index) {
                if(listIngredient._id === ingredient._id) {
                    returnVal = index;
                }
            });
            return returnVal;
        }
        function processList (list) {
            $scope.doneArray = list.gotIngredients || [];
            $scope.neededArray = BoodschappenLijst.getNeededIngredients(list);
        }
        list.$promise.then(function (data) {
            socket.syncUpdates('grocery-list', list, processList);
            processList(data);
        });

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('list');
        });

        $scope.changeList = function () {
            $scope.doneArray.push($scope.neededArray[0].ingredient);
            list.$save();
        }
        $scope.addIngredient = function (ingredient) {
            if(ingredientInList($scope.doneArray, ingredient) === -1) {
                $scope.doneArray.push(ingredient);
            }
            //sync arrays
            list.gotIngredients = $scope.doneArray;

            list.$save().then(function () {
                debugger;
            });
        };
        $scope.removeIngredient = function (ingredient) {
            var index =  ingredientInList($scope.doneArray, ingredient);
            if(index > -1) {
                $scope.doneArray.splice(index, 1);
            }
            list.gotIngredients = $scope.doneArray;

            list.$save();
        };
    });
