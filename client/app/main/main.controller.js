'use strict';

angular.module('recipeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [{
      image: 'assets/images/recipe1.jpg',
      text: 'Recept 1',
      id: 1
    },
    {
      image: 'assets/images/recipe2.jpg',
      text: 'Recept 2',
      id: 2
    },
    {
      image: 'assets/images/recipe3.jpg',
      text: 'Recept 3',
      id: 3
    }];


    $scope.bestRecipes =[{
      name: 'test 1',
      rating: 'rating3'
    },{
      name: 'test 2',
      rating: 'rating2'
    },{
      name: 'test 3',
      rating: 'rating5'
    },{
      name: 'test 4',
      rating: 'rating1'
    },{
      name: 'test 5',
      rating: 'rating4'
    },{
      name: 'test 6',
      rating: 'rating3'
    },
    ];
  });
