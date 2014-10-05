'use strict';

describe('Controller: BoodschappenShoppingCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var BoodschappenShoppingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoodschappenShoppingCtrl = $controller('BoodschappenShoppingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
