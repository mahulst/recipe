'use strict';

angular.module('recipeApp')
  .service('BoodschappenLijst', function BoodschappenLijst() {
        var currentList = createNewList();

        this.addRecipeToList = function (recipe) {
            currentList.push(recipe);
        };
        function createNewList () {
            return {
                recepten: [],
                date: new Date()
            }
        }
  });
