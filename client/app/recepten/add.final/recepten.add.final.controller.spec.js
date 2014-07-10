'use strict';

describe('Controller: ReceptenAddFinalCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var ReceptenAddFinalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceptenAddFinalCtrl = $controller('ReceptenAddFinalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
