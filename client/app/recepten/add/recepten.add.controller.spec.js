'use strict';

describe('Controller: ReceptenAddCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var $rootScope, $httpBackend, createController, $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    createController = function () {
      return $controller('ReceptenAddCtrl', {$scope: $rootScope});
    };
  }));

  it('should have function to save new recipe', function () {
    //var controller = createController();
    $httpBackend.expect('POST', '/api/recipes/1')
      .respond(200);
    $rootScope.saveRecipe({id: 1});
    $httpBackend.flush();
  });
});
