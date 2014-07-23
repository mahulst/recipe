'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ingredienten', {
        url: '/ingredienten',
        templateUrl: 'app/ingredienten/list/ingredienten.list.html',
        controller: 'IngredientenListCtrl'
      });
  });