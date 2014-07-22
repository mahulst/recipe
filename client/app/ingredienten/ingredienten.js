'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ingredienten', {
        url: '/ingredienten',
        templateUrl: 'app/ingredienten/ingredienten.html',
        controller: 'IngredientenCtrl'
      });
  });