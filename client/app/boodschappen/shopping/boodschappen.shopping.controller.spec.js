'use strict';

describe('Controller: BoodschappenShoppingCtrl', function () {

  // load the controller's module
  beforeEach(module('recipeApp'));

  var BoodschappenShoppingCtrl, scope;

  // Initialize the controller and a mock scope

    var $rootScope, $httpBackend, createController, $controller, stateParams, response;
    beforeEach(inject(function ($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        stateParams = {id: 1};
        createController = function () {
            return $controller('BoodschappenShoppingCtrl', {$scope: $rootScope,$stateParams : stateParams});
        };
        response = {
            recepten: [{
                ingredients: [{
                    ingredient: {
                        a: 'b',
                        _id: 'abc'
                    },
                    amount: 20
                }, {
                    ingredient: {
                        a: 'b',
                        _id: 'abc2'
                    },
                    amount: 20
                }, {
                    ingredient: {
                        a: 'b',
                        _id: 'abc'
                    },
                    amount: 10
                }]
            }],
            gotIngredients: [{ingredient: {a:'b', _id: 'abc'}},{ingredient:{_id: 'abcd'}},{ingredient:{_id: 'abce'}},{ingredient:{_id: 'abcf'}},{ingredient:{_id: 'abcg'}}]
        };
    }));

  it('should initialize should split the array of ingredients into two arrays: done and still needed', function () {
      var controller = createController();
      $httpBackend.expectGET('/api/grocery-lists/1').respond(response);
      $httpBackend.flush();

      expect($rootScope.doneArray.length).to.equal(5);
      expect($rootScope.neededArray.length).to.equal(2);
  });
    it('should add up the amount of each ingredient in the needed list', function () {
        var controller = createController();
        $httpBackend.expectGET('/api/grocery-lists/1').respond(response);
        $httpBackend.flush();

        expect($rootScope.neededArray[0].amount).to.equal(30);
    });
});
