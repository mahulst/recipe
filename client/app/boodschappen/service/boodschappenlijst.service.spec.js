'use strict';

describe('Service: BoodschappenLijst', function () {

  // load the service's module
  beforeEach(module('recipeApp'));

  // instantiate service
  var BoodschappenLijst;
  beforeEach(inject(function (_BoodschappenLijst_) {
      BoodschappenLijst = _BoodschappenLijst_;
  }));

  it('should create an empty list on the scope named currentList', function () {
    expect(BoodschappenLijst.currentList).to.be.truthy;
  });

});
