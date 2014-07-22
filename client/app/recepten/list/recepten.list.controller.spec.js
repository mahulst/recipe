'use strict';

describe('Controller: ReceptenListCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceptenListCtrl = $controller('ReceptenListCtrl', {
      $scope: scope
    });
  }));

  it('should add recipes to scope', function () {
    expect(scope.recipes).to.be.an('array');
  });
});
