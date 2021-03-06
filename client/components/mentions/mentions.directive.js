'use strict';

angular.module('recipeApp')
  .directive('mentions', function () {
    return {
      templateUrl: 'components/mentions/mentions.html',
      restrict: 'E',
      controller: 'MentionsCtrl',
      scope: {
        step: '=model'
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

                case 32:
                case 13:
                    if(scope.visible) {
                        scope.selectResult();
                        e.preventDefault();
                    }
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


angular.module('recipeApp')
    .directive('test', function($sce, $filter) {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope, element, attrs, ngModel) {
            // do nothing if no ng-model
            if (!ngModel){
                return;
            }
            //format text going to user (model to view)
            ngModel.$formatters.push(function(value) {
                var text = $filter('printf')(value, scope.step.ingredients);
                return text;
            });


        }
    };
});