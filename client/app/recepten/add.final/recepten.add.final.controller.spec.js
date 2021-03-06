'use strict';
describe('Controller: ReceptenAddFinalCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

    var $rootScope, $httpBackend, createController, $controller;
    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        createController = function () {
            return $controller('ReceptenAddFinalCtrl', {$scope: $rootScope});
        };
    }));

    it('should have function to fetch ingredients by query', function () {
        var response = [{},{},{},{},{}];
        createController();

        $httpBackend.expectGET('/api/ingredients/string/abc')
            .respond(response);
        $rootScope.fetchIngredientsByQuery('abc');
        $httpBackend.flush();
    });

    it('should add an empty ingredient to ingredients array' , function () {
        createController();

        expect($rootScope.recipe.ingredients.length).to.equal(0);
        //add ingredient
        $rootScope.addIngredient();
        expect($rootScope.recipe.ingredients.length).to.equal(1);
    });
});
