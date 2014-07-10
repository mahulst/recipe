'use strict';

describe('Controller: ReceptenAddCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceptenAddCtrl = $controller('ReceptenAddCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
