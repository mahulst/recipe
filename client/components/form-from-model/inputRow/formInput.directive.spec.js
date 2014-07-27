'use strict';

describe('Directive: inputRow', function () {

  // load the directive's module and view
  beforeEach(module('recipeApp'));
  beforeEach(module('components/form-from-model/inputRow/formInput.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    
  }));
});