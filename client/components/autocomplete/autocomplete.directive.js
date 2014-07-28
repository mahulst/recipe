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
      	scope.query = '';
      	scope.showResult = false;

      	scope.filter = function (query) {
      		scope.showResult = (query !== '');
	      		scope.fetchResult({query: query}).then(function (data) {
              scope.fetchedResult = data;
            });
      	};

      	scope.onBlur = function () {
      		scope.showResult = false;
      	};
      }
    };
  });