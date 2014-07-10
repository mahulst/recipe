'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boodschappen.add', {
        url: '/add',
        templateUrl: 'app/boodschappen/add/boodschappen.add.html',
        controller: 'BoodschappenAddCtrl'
      });
  });