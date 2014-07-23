'use strict';

describe('Controller: IngredientenListCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var IngredientenListCtrl, scope, $httpBackend, returnData;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
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
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    IngredientenListCtrl = $controller('IngredientenListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    $httpBackend.expectGET('/api/ingredients')
      .respond(returnData);
    expect(scope.ingredients).to.be.an('array');

    $httpBackend.flush();
    
    expect(scope.ingredients.length).to.equal(3);
  });
});
