'use strict';

describe('Controller: BoodschappenShoppingCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var BoodschappenShoppingCtrl, scope;

  // Initialize the controller and a mock scope

    var $rootScope, $httpBackend, createController, $controller, stateParams;
    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        stateParams = {id: 1};
        createController = function () {
            return $controller('BoodschappenShoppingCtrl', {$scope: $rootScope,$stateParams : stateParams});
        };
    }));

  it('should initialize should split the array of ingredients into two arrays: done and still needed', function () {
      var controller = createController(),
          response = {
              recepten: [{
                  ingredients: [{
                      ingredient: {
                          a: 'b',
                          _id: 'abc'
                      }
                  }]
              }],
              gotIngredients: [{ingredient: {a:'b', _id: 'abc'}},{ingredient:{_id: 'abc'}},{ingredient:{_id: 'abc'}},{ingredient:{_id: 'abc'}},{ingredient:{_id: 'abc'}}]
          };
      $httpBackend.expectGET('/api/grocery-lists/1').respond(response);

      $httpBackend.flush();

      expect($rootScope.doneArray.length).to.equal(5);
      expect($rootScope.neededArray.length).to.equal(1);
  });
});
