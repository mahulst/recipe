'use strict';

describe('Controller: ReceptenAddBasicCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenAddBasicCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceptenAddBasicCtrl = $controller('ReceptenAddBasicCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
