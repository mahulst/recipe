'use strict';

describe('Controller: ReceptenListCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenListCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    var returnData;

    //data for mock backend to return
    returnData = [{
        name: 'Recipe 1'
      },{
        name: 'Recipe 2'
      },{
        name: 'Recipe 3'
      }];
    //setting up mock backend
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/recipes').respond(returnData);
    scope = $rootScope.$new();
    ReceptenListCtrl = $controller('ReceptenListCtrl', {
      $scope: scope
    });
  }));

  it('should add recipes to scope', function () {
    $httpBackend.flush();
    expect(scope.recipes).to.be.an('array');
    expect(scope.recipes.length).to.equal(3);
  });
});
