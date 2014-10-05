'use strict';

angular.module('recipeApp')
    .controller('BoodschappenShoppingCtrl', function ($scope, BoodschappenLijst, $stateParams) {
        var ingredienten = BoodschappenLijst.get({id: $stateParams.id});

    });
