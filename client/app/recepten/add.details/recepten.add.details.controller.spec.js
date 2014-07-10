'use strict';

describe('Controller: ReceptenAddDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenAddDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceptenAddDetailsCtrl = $controller('ReceptenAddDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
