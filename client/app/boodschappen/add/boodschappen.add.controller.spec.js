'use strict';

describe('Controller: BoodschappenAddCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var BoodschappenAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoodschappenAddCtrl = $controller('BoodschappenAddCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
