'use strict';

angular.module('recipeApp')
  .directive('mentions', function ($compile) {
    return {
      templateUrl: 'components/mentions/mentions.html',
      restrict: 'E',
      controller: 'MentionsCtrl',
      scope: {
        control: '='
      },
      link: function (scope, element) {
        var textarea = element.find('textarea');
        textarea.keydown(function (e) {
            switch(e.keyCode) {
                //up
                case 38:
                    scope.selectUp();
                    e.preventDefault();
                    scope.$digest();
                    break;
                //down
                case 40:
                    scope.selectDown();
                    e.preventDefault();
                    scope.$digest();
                    break;
            }
        });
        textarea.keyup(function (e) {
          var hash = scope.hashCheck(angular.element(e.target).val()),
            position;

          if(hash) {
            position = angular.element(e.target).textareaHelper('caretPos');
            scope.open(position);
            scope.query(hash);
          }
          else {
            scope.close();
          }
        });
      }
    };
  });