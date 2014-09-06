'use strict';

angular.module('recipeApp')
  .controller('MentionsCtrl', function ($scope) {
    $scope.visible = true;
    $scope.control.setVisible = function (bool) {
        $scope.visible = bool;
    }
  });
