'use strict';

angular.module('recipeApp')
  .factory('Mentions', function () {
    var getPosition, openDialog, setApiController, apiController;
    setApiController = function (control) {
      apiController = control;
    };
    openDialog = function () {
      apiController.setVisible(false);
      console.log('openDialog');
    };
    return {
      openDialog: openDialog,
      setApiController: setApiController
    }
  });
