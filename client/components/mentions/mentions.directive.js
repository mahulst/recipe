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
        textarea.keyup(function (e) {
          var hash = scope.hashCheck(angular.element(e.target).val()),
            position,
            offset;
          if(hash) {
            scope.setVisible(true);
            position = angular.element(e.target).textareaHelper('caretPos');
            console.log(position, offset);
            scope.setPosition(position.left , position.top);
          }
          else {
            scope.setVisible(false);
          }
        });
        var test = $compile('<div class="tail" ng-show="visible" ng-style="{left: position.x,top: position.y}"> dit is een test </div>')(scope);
        var popup = textarea.after(test);

      }
    };
  });