'use strict';

describe('Controller: ReceptenAddDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

    var $rootScope, $httpBackend, createController, $controller;
    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        createController = function () {
            return $controller('ReceptenAddDetailsCtrl', {$scope: $rootScope});
        };
    }));
    // Initialize the controller and a mock scope
    beforeEach(inject(function () {
//        var controller = createController();
    }));

    it('should create new step if last step is filled', function () {
        var controller = createController();
        expect($rootScope.recipe.steps.length).to.equal(1);
        $rootScope.lastEntry.text = 'Test';
        $rootScope.$apply();
        expect($rootScope.recipe.steps.length).to.equal(2);

    });
});
