'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ingredienten.add', {
        url: '/add',
        templateUrl: 'app/ingredienten/add/ingredienten.add.html',
        controller: 'IngredientenAddCtrl'
      });
  });