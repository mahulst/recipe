angular.module('recipeApp')
    .filter('printf', function() {
        return function(input, values) {
            input = input || '';
            var arr = input.match(/{(\d+)}/g),
                regex;
            for (var i = 0; i < arr.length; i += 1) {
                regex = new RegExp('{('+ i + ')}');
                input = input.replace(regex, values[i].name);
            }
            return input;
        };
    });