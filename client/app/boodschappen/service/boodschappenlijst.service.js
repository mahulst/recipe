'use strict';

angular.module('recipeApp')
  .service('BoodschappenLijst', function BoodschappenLijst( $resource) {
        var listResource, currentList;
        function createNewList () {
            return {
                recepten: [],
                date: new Date()
            };
        }
        listResource = $resource('/api/grocery-lists/:id', {id: '@id'});
        currentList = createNewList();

        this.addRecipeToList = function (recipe) {
            currentList.recepten.push(recipe);
            console.log(currentList);
        };

        this.getCurrentList = function () {
            return currentList;
        };
        this.get = function (obj) {
            return listResource.get({id: obj.id});
        };
        this.saveList = function (list) {
            return listResource.save(list);
        };
        this.query = function () {
            return listResource.query();
        };
  });
