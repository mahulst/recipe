'use strict';

angular.module('recipeApp')
    .controller('BoodschappenShoppingCtrl', function ($scope, BoodschappenLijst, $stateParams) {
        var list = BoodschappenLijst.get({id: $stateParams.id});

        list.$promise.then(function () {
            $scope.doneArray = list.gotIngredients || [];
            $scope.neededArray = BoodschappenLijst.getNeededIngredients(list);
        });
    });
