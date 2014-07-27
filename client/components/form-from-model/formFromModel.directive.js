'use strict';

angular.module('recipeApp')
  .directive('formFromModel', function () {
    return {
      templateUrl: 'components/form-from-model/formFromModel.html',
      restrict: 'E',
      scope: {
      	modelData : '=modelData',
      	saveFn: '&'
      },
      link: function (scope) {
      	scope.ingredient = {};
      	scope.save = function (form) {
      		scope.submitted = true;
      		scope.saveFn({ingredient: scope.ingredient}).catch(function (err) {
      			  err = err.data;
		          scope.errors = {};

		          // Update validity of form fields that match the mongoose errors
		          angular.forEach(err.errors, function(error, field) {
		            form[field].$setValidity('mongoose', false);
		            scope.errors[field] = error.message;
		          });
      		});
      	};
      }
    };
  });