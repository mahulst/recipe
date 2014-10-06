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
        this.listIngredients = function (list) {
            var obj = {};
            angular.forEach(list.recepten, function (recept) {
                angular.forEach(recept.ingredients, function (ingredient){
                    if(!ingredient) {
                        return;
                    }
                    if(!obj[ingredient.ingredient._id]){
                        obj[ingredient.ingredient._id] = {ingredient: ingredient.ingredient, amount: ingredient.amount};
                    } else {
                        obj[ingredient.ingredient._id].amount += ingredient.amount;
                    }
                });
            });
            return obj;
        };

        this.getNeededIngredients = function (list) {
            var neededIngredients = [];
            angular.forEach(list.recepten, function (recept) {
               angular.forEach(recept.ingredients, function (ingredient) {
                   if(list.gotIngredients.indexOf(ingredient) === -1) {
                        neededIngredients.push(ingredient);
                   }
               });
            });
            return neededIngredients;
        };
  });
