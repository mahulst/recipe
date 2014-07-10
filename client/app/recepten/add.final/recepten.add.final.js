'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addRecipe.final', {
        url: '/final',
        templateUrl: 'app/recepten/add.final/recepten.add.final.html',
        controller: 'ReceptenAddFinalCtrl'
      });
  });