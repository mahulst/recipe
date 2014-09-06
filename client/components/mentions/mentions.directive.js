'use strict';

angular.module('recipeApp')
  .directive('mentions', function () {
    return {
      templateUrl: 'components/mentions/mentions.html',
      restrict: 'E',
      controller: 'MentionsCtrl',
      scope: {
        control: '='
      },
      link: function (scope) {
      	
      }
    };
  });