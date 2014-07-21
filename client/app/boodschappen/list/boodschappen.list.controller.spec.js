'use strict';

describe('Controller: BoodschappenListCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var BoodschappenListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoodschappenListCtrl = $controller('BoodschappenListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
