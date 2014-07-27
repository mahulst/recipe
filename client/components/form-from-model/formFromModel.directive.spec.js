'use strict';

describe('Directive: formFromModel', function () {

  // load the directive's module and view
  beforeEach(module('recipeApp'));
  beforeEach(module('components/form-from-model/formFromModel.html'));

  var element, scope, model, $httpBackend;
  before(function () {
    model = {"name":{"enumValues":[],"regExp":null,"path":"name","instance":"String","validators":[[null,"Path `{PATH}` is required.","required"],[null,"This ingredient already exists","user defined"]],"setters":[],"getters":[],"options":{"required":true},"_index":null,"isRequired":true},"info":{"enumValues":[],"regExp":null,"path":"info","instance":"String","validators":[],"setters":[],"getters":[],"options":{},"_index":null},"locationGroup":{"path":"locationGroup","instance":"Number","validators":[],"setters":[],"getters":[],"options":{},"_index":null},"price":{"path":"price","instance":"Number","validators":[],"setters":[],"getters":[],"options":{},"_index":null},"active":{"path":"active","validators":[],"setters":[],"getters":[],"options":{},"_index":null}} ;
  })
  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'components/form-from-model/inputRow/formInput.html')
      .respond(200);
    scope = $rootScope.$new();
    scope.model = model;
  }));

  it('should get model data from attribute model-data', inject(function ($compile) {
    var inputCount;
    element = angular.element('<form-from-model model-data="model"></form-from-model>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.isolateScope()).to.have.property('modelData');
    expect(element.isolateScope().modelData).to.contain.keys(['name', 'info', 'locationGroup']);
  }));
});