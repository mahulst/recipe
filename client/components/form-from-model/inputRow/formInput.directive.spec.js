'use strict';

describe('Directive: inputRow', function () {

  // load the directive's module and view
  beforeEach(module('recipeApp'));
  beforeEach(module('components/form-from-model/inputRow/inputRow.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<input-row></input-row>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the inputRow directive');
  }));
});