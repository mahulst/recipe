angular.module('recipeApp')
    .filter('printf', function() {
        return function(input, arr) {
            return input.replace(/\{(\d+)\}/g, function (match, capture) {
                return '[~' + arr[1*capture].name +']';
            });
        };
    });