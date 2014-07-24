'use strict';

describe('Controller: IngredientenAddCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var $controller, $rootScope, createController, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');

    createController = function () {
      return $controller('IngredientenAddCtrl', {
        $scope: $rootScope
      });
    };
  }));

  it('should have an object representing the ingredient model', function () {
    var model = {},
      controller = createController();
    $httpBackend.expectGET('/api/ingredients/model')
      .respond(model);
    $httpBackend.flush();
    expect($rootScope.ingredientModel).to.be.an('object');
  });
});
