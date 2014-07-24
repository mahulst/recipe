'use strict';

angular.module('recipeApp')
  .directive('formFromModel', function () {
    return {
      templateUrl: 'components/form-from-model/formFromModel.html',
      restrict: 'E',
      scope: {
      	modelData : '=modelData'
      },
      link: function () {

      }
    };
  });