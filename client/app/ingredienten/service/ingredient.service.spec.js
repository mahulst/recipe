'use strict';

describe('Service: ingredient', function () {

  // load the service's module
  beforeEach(module('recipeApp'));

  // instantiate service
  var Ingredient;
  beforeEach(inject(function (_Ingredient_) {
    Ingredient = _Ingredient_;
  }));

  it('should do something', function () {
    expect(!!Ingredient).to.equal(true);
  });

});
