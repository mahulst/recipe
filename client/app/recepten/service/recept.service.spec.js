'use strict';

describe('Service: recepten', function () {

  // load the service's module
  beforeEach(module('recipeApp'));

  // instantiate service
  var Recept, $httpBackend;
  beforeEach(inject(function (_Recept_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    Recept = _Recept_;
  }));

  it('should return list of recipes', function () {
    var returnData = [{
        name: 'Recipe 1'
      },{
        name: 'Recipe 2'
      },{
        name: 'Recipe 3'
      }];
    $httpBackend.expectGET('/api/recipes')
      .respond(returnData);
    var recipes = Recept.query();
    $httpBackend.flush()
    expect(recipes).to.be.an('array');
    expect(recipes.length).to.equal(3);
  });

});
