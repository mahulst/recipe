'use strict';

describe('Controller: IngredientenListCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var IngredientenListCtrl, $controller, $rootScope, $httpBackend, returnData, createController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, _$httpBackend_) {
    returnData = [{ 
        name: "Apple",
        info: "Doodnormale appel",
      }, { 
        name: "Pear",
        info: "Doodnormale peer",
      }, { 
        name: "Flour",
        info: "Patent bloem",
      }];
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', '/api/ingredients').respond(returnData);

    createController = function () {
      return $controller('IngredientenListCtrl', {
        $scope: $rootScope
      });
    }
  }));

  it('should add ingredients to scope', function () {
    $httpBackend.expectGET('/api/ingredients');

    var controller = createController();
    $httpBackend.flush();   

    expect($rootScope.ingredients).to.be.an('array'); 
    expect($rootScope.ingredients.length).to.equal(3);
  });
  
  it('should delete ingredients by id', function () {
    var controller = createController();
    $httpBackend.flush();   
    // $httpBackend.flush();

    $httpBackend.expectDELETE('/api/ingredients/1').respond(201,'');
    $rootScope.deleteIngredient(1);
    $httpBackend.flush();
  });
});
