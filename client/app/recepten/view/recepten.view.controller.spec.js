'use strict';

describe('Controller: ReceptenViewCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenViewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceptenViewCtrl = $controller('ReceptenViewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
