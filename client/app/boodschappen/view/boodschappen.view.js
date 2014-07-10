'use strict';

angular.module('recipeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boodschappen.view', {
        url: '/:id',
        templateUrl: 'app/boodschappen/view/boodschappen.view.html',
        controller: 'BoodschappenViewCtrl'
      });
  });