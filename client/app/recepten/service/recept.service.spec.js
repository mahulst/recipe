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
});
