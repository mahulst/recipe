'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recepten/view', {
        url: '/recepten/view',
        templateUrl: 'app/recepten/view/view.html',
        controller: 'ReceptenViewCtrl'
      });
  });