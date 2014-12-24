'use strict';

angular.module('recipeApp')
  .factory('Recept', function ($resource) {
    var Recipe = $resource('/api/recipes/:id', {id: '@id'});

    Recipe.prototype.save = function (args) {
      debugger;
      for (var i = 0, n = this.ingredients.length; i < n; i += 1) {
        var ingredient = this.ingredients[i].ingredient || undefined;
        if (ingredient === undefined || ingredient === null) {
          this.ingredients.splice(i, 1);
        }
      }
      this.$save();
    };

    return Recipe;
  });
