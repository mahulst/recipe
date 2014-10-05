'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boodschappen.shopping', {
        url: '/shopping/:id',
        templateUrl: 'app/boodschappen/shopping/boodschappen.shopping.html',
        controller: 'BoodschappenShoppingCtrl'
      });
  });