'use strict';

angular.module('recipeApp')
  .directive('selectAutocomplete', function () {
    return {
      templateUrl: 'components/autocomplete/autocomplete.html',
      restrict: 'E',
      replace: true,
      scope: {
      	fetchResult: '&',
        mhModel: '='
      },
      link: function (scope, element) {
        var lastQuery = '',
          filter;
        scope.indexOfSelected = 0;
      	scope.showResult = false;
        scope.selectedValue = null;
        scope.fetchedResult = [];

        initData();

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
        function selectValue(ingredient) {
            if (ingredient) {
                scope.query = ingredient.name;
                scope.mhModel = ingredient;
            } else {
                scope.query = '';
                scope.mhModel = null;
            }
            close();
        }
        scope.onKeyUp = function (e) {
            var ingredient = getSelectedIngredient();
          switch(e.keyCode) {
            //left
            case 37:
            break;
            //up
            case 38:
              if(ingredient) {
                decrementIndexOfSelected();
              }
            break;
            //right
            case 39:
            break;
            //down
            case 40:
              if(ingredient) {
                incrementIndexOfSelected();
              }
            break;
            //enter
            case 13:
              if(ingredient) {
                selectValue(ingredient);
              }
            break;
            default:
              scope.indexOfSelected = 0;
              filter();
            break;
          }
        };

      	filter = function () {
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
            selectValue(getSelectedIngredient());
            close();
      	};
        function close () {
            scope.showResult = false;
        }
        function getSelectedIngredient () {
            return scope.fetchedResult[scope.indexOfSelected];
        }
        function initData () {
          if(scope.mhModel) {
            scope.query = scope.mhModel.name;
          }
        }
      }
    };
  });