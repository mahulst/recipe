'use strict';

angular.module('recipeApp').directive('formInput', function($compile) {
  return {
    replace: true,
    templateUrl: 'components/form-from-model/inputRow/formInput.html',
    restrict: 'E',
    scope: {
      model: '='
    },
    link: function(scope, element, attrs) {
      scope.opts = attrs;


      $compile(element.contents())(scope);
    }
  }
});