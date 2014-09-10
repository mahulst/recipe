'use strict';

angular.module('recipeApp')
  .factory('Mentions', function () {
    var  openDialog, setApiController, apiController;
    setApiController = function (control) {
      apiController = control;
    };
    openDialog = function (x, y) {
      apiController.setVisible(true);
      apiController.setPosition(x, y);
      console.log('openDialog');
    };

    return {
      openDialog: openDialog,
      setApiController: setApiController
    };
  });
