'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addRecipe', {
        url: '/recepten/add',
        templateUrl: 'app/recepten/add/recepten.add.html',
        controller: 'ReceptenAddCtrl'
      });
  });