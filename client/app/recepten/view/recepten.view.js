'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recepten.view', {
        url: '/recepten/view/:id',
        templateUrl: 'app/recepten/view/recepten.view.html',
        controller: 'ReceptenViewCtrl'
      });
  });
