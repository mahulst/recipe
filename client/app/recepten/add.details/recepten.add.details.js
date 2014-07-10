'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addRecipe.details', {
        url: '/details',
        templateUrl: 'app/recepten/add.details/recepten.add.details.html',
        controller: 'ReceptenAddDetailsCtrl'
      });
  });