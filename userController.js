//create and initialize the module (note not an array as second arguament)
//as it is not creating a new module, but an instance of already existing
var app = angular.module("myApp");

//initialize controller and bring in dependencies strings
app.controller("userController", [
  "$scope",
  "github",
  "$routeParams",

  //add dependencies as function parameters
  function ($scope, github, $routeParams) {
    //simple variable attached to $scope serving as the title <h1>
    $scope.message = "Github Viewer";

    //function to run once the after github.getUser completes
    const onUserComplete = (data) => {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    //function to run when githib.getRepos completes
    const onRepos = (data) => {
      $scope.repos = data;
    };

    //function to run if error occurs in hhtp req
    const onError = () => {
      $scope.error = "could not fetch the user";
    };

    $scope.username = $routeParams.username;
    //variable that can be changed in the html to reorder results
    $scope.repoSortOrder = "+name";
    github.getUser($scope.username).then(onUserComplete, onError);
  },
]);
