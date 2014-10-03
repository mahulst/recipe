'use strict';

describe('Controller: IngredientenAddCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

        var $controller, $rootScope, createController, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    var model = {};
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', '/api/ingredients/model')
      .respond(model);
    createController = function () {
      return $controller('IngredientenAddCtrl', {
        $scope: $rootScope
      });
    };
  }));

  it('should have an object representing the ingredient model', function () {
    //var controller = createController();
    $httpBackend.expectGET('/api/ingredients/model');
    $httpBackend.flush();
    expect($rootScope.ingredientModel).to.be.an('object');
  });

  it('should have a method for adding new ingredients', function () {
    var ingredient = {name: 'Apple'};
    //build controller
    //var controller = createController();
    $httpBackend.flush();

    $rootScope.saveIngredient(ingredient);
    $httpBackend.expectPOST('/api/ingredients').respond(200);    
    $httpBackend.flush();
  });
});
