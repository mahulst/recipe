'use strict';

describe('Controller: BoodschappenViewCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  // Initialize the controller and a mock scope
    var $rootScope, $httpBackend, createController, $controller, stateParams;
    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        stateParams = {id: 1};
        createController = function () {
            return $controller('BoodschappenViewCtrl', {$scope: $rootScope,$stateParams : stateParams});
        };
    }));

    it('should create an array of ingredients from each recipe on the list', function () {
        var response = {recepten: [{ingredients: [{ingredient: {_id: 'asdbasdvafsasdf'}},{ingredient: {_id: 'asdbasdvafsasdf2'}}]},{ingredients:[{ingredient: {_id: 'asdbasdvafsasdf3'}}]}]};
        $httpBackend.expectGET('/api/grocery-lists/1')
            .respond(response);
        var controller = createController();
        $httpBackend.flush();
        expect(Object.keys($rootScope.ingredients).length).to.equal(3);
    });

    it('should not add duplicates to array of ingredients', function () {
        var response = {recepten: [{ingredients: [{ingredient: {_id: 'asdbasdvafsasdf'}},{ingredient: {_id: 'asdbasdvafsasdf2'}}]},{ingredients:[{ingredient: {_id: 'asdbasdvafsasdf'}},{ingredient: {_id: 'asdbasdvafsasdf3'}}]}]};
        $httpBackend.expectGET('/api/grocery-lists/1')
            .respond(response);
        var controller = createController();
        $httpBackend.flush();
        expect(Object.keys($rootScope.ingredients).length).to.equal(3);
    });


});
