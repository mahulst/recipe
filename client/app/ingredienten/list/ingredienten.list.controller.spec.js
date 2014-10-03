'use strict';

describe('Controller: IngredientenListCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var $controller, $rootScope, $httpBackend, returnData, createController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, _$httpBackend_) {
    returnData = [{ 
        name: 'Apple',
        info: 'Doodnormale appel',
        _id: 1
      }, { 
        name: 'Pear',
        info: 'Doodnormale peer',
      }, { 
        name: 'Flour',
        info: 'Patent bloem',
      }];
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', '/api/ingredients').respond(returnData);

    createController = function () {
      return $controller('IngredientenListCtrl', {
        $scope: $rootScope
      });
    };
  }));

  it('should add ingredients to scope', function () {
    $httpBackend.expectGET('/api/ingredients');

    createController();
    $httpBackend.flush();   

    expect($rootScope.ingredients).to.be.an('array'); 
    expect($rootScope.ingredients.length).to.equal(3);
  });
  
  it('should delete ingredients per function', function () {
    createController();
    $httpBackend.flush();   
    // $httpBackend.flush();
    expect($rootScope.ingredients.length).to.equal(3);

    $httpBackend.expectDELETE('/api/ingredients/1').respond(201,'');
    $rootScope.deleteIngredient({_id: 1});
    $httpBackend.flush();

    //expect one ingredient to be deleted
    expect($rootScope.ingredients.length).to.equal(2);
  });
});
