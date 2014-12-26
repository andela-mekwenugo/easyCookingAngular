'Use Strict';

var recipeApp = angular.module('recipeApp', []);
var recipeController = recipeApp.controller;
recipeApp.controller('recipeController',['$scope', '$http', function($scope,$http) {

  $scope.searchRecipe = function(recipeName) {
      $scope.recipeName = recipeName;
      $('.load').show();
      $http.get("http://api.bigoven.com/recipes?title_kw=" + $scope.recipeName + "&pg=1&rpp=20&api_key=dvx0hom7nq400HGdFUJ164n6U7H9eA2V").
      success(function(data) {
        if(data.Results.length === 0) {
            $('.loadArea').html("No result found. Please Enter Another Recipe Name");
            $('.load').hide();
        }
        $scope.Results = data;
        $scope.recipes = data.Results;
        console.log(data);
      });
  };
}]);