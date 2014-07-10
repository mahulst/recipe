'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boodschappen', {
        url: '/boodschappen',
        templateUrl: 'app/boodschappen/list/boodschappen.list.html',
        controller: 'BoodschappenListCtrl'
      });
  });