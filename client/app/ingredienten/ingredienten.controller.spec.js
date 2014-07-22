'use strict';

describe('Controller: IngredientenCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var IngredientenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngredientenCtrl = $controller('IngredientenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
