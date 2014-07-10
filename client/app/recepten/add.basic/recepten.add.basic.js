'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addRecipe.basic', {
        url: '/basic',
        templateUrl: 'app/recepten/add.basic/recepten.add.basic.html',
        controller: 'ReceptenAddBasicCtrl'
      });
  });