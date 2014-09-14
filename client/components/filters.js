angular.module('myReverseModule')
    .filter('printf', function() {
        return function(input, uppercase) {
            input = input || '';
            var arr = input.match(/{(\d+)}/g);
            for (var i = 0; i < arr.length; i += 1) {
                input.replace('/'+ '{0}' +'/', 'test')
            }
        };
    });