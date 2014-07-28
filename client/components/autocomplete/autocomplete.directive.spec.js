'use strict';

describe('Directive: autocomplete', function () {

  // load the directive's module and view
  beforeEach(module('recipeApp'));
  beforeEach(module('components/autocomplete/autocomplete.html'));

  var element, scope, triggerKeyUp;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    triggerKeyUp = function (element, keyCode) {
      var e = angular.element.Event('keyup');
      e.which = keyCode;
      element.trigger(e);
    };
  }));

  it('should hide results on start up', inject(function ($compile) {
    element = angular.element('<select-autocomplete></select-autocomplete>');
    element = $compile(element)(scope);
    scope.$apply();

    expect(element.isolateScope().showResult).to.be.false;

  }));

  it('should show results when search bar has been filled', inject(function ($compile) {
    var isolateScope;
     scope.fetchResult = function (query) {
      isolateScope.fetchedResult = true;
      isolateScope.fetchedQuery = query;
      return {then: function(){}};
    };
    element = angular.element('<select-autocomplete fetch-result="fetchResult(query)"></select-autocomplete>');
    element = $compile(element)(scope);
    scope.$apply();    
    isolateScope = element.isolateScope();
    isolateScope.query = 'A';
    isolateScope.filter(isolateScope.query);
    expect(isolateScope.showResult).to.be.true;
  }));

  it('should hide results when search bar blurs ', inject(function ($compile) {
    var isolateScope;
    scope.fetchResult = function (query) {
      isolateScope.fetchedResult = true;
      isolateScope.fetchedQuery = query;
      return {then: function(){}};
    };
    element = angular.element('<select-autocomplete fetch-result="fetchResult(query)"></select-autocomplete>');
    element = $compile(element)(scope);
    scope.$apply();    
    isolateScope = element.isolateScope();

    isolateScope.query = 'A';
    isolateScope.filter(scope.query);
    expect(isolateScope.showResult).to.be.true;

    isolateScope.onBlur();
    expect(isolateScope.showResult).to.be.false;
  }));

  it('should fetch results by query typed in searchbar', inject(function ($compile) {
    var isolateScope;
    scope.fetchResult = function (query) {
      isolateScope.fetchedResult = true;
      isolateScope.fetchedQuery = query;
      return {then: function(){}};
    };
    element = angular.element('<select-autocomplete fetch-result="fetchResult(query)"></select-autocomplete>');
    element = $compile(element)(scope);
    scope.$apply();    
    isolateScope = element.isolateScope();

    isolateScope.filter('test');
    expect(isolateScope.fetchedResult).to.be.true;
    expect(isolateScope.fetchedQuery).to.equal('test');
  }));
});