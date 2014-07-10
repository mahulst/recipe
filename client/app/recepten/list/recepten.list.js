'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recepten', {
        url: '/recepten',
        templateUrl: 'app/recepten/list/recepten.list.html',
        controller: 'ReceptenListCtrl'
      });
  });