'use strict';

angular.module('recipeApp')
  .service('BoodschappenLijst', function BoodschappenLijst() {
        var currentList = createNewList();

        this.addRecipeToList = function (recipe) {
            currentList.recepten.push(recipe);
            console.log(currentList);
        };
        function createNewList () {
            return {
                recepten: [],
                date: new Date()
            }
        }
        this.getList = function () {
            return currentList;
        }
  });
