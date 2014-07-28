'use strict';

angular.module('recipeApp')
  .directive('selectAutocomplete', function () {
    return {
      templateUrl: 'components/autocomplete/autocomplete.html',
      restrict: 'E',
      replace: true,
      scope: {
      	fetchResult: '&'
      },
      link: function (scope) {
        var lastQuery = '',
          filter;
        scope.indexOfSelected = 0;
      	scope.query = '';
      	scope.showResult = false;
        scope.selectedValue = null;
        scope.fetchedResult = [];
        function incrementIndexOfSelected () { 
          if(scope.indexOfSelected >= scope.fetchedResult.length - 1){
            scope.indexOfSelected = 0;
          } else {
            scope.indexOfSelected += 1;
          }
        }
        function decrementIndexOfSelected () { 
          if(scope.indexOfSelected < 1){
            scope.indexOfSelected = scope.fetchedResult.length -1;
          } else {
            scope.indexOfSelected -= 1;
          }         
        }
        function selectValue() {
          console.log(scope.indexOfSelected)
        }
        scope.onKeyUp = function (e) {  
          switch(e.keyCode) {
            //left
            case 37:
            break;
            //up
            case 38:
              if(scope.fetchedResult[scope.indexOfSelected]) {
                decrementIndexOfSelected();
              }
            break;
            //right
            case 39:
            break;
            //down
            case 40:
              if(scope.fetchedResult[scope.indexOfSelected]) {
                incrementIndexOfSelected();
              }
            break;
            //enter
            case 13:
              if(scope.fetchedResult[scope.indexOfSelected]) {
                selectValue();
              }
            break;
            default:
              scope.indexOfSelected = 0;
              filter();
            break;
          }
        };

      	filter = function (query) {
          if(lastQuery !== scope.query) {
            scope.fetchedResult = [];
            lastQuery = scope.query;
        		scope.showResult = (scope.query !== '');
        		scope.fetchResult({query: scope.query}).then(function (data) {
              scope.fetchedResult = data;
            });
          }
      	};

      	scope.onBlur = function () {
      		scope.showResult = false;
      	};
      }
    };
  });