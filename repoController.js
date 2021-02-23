(function () {
  //create instance of module (no asquare brackets as second arguament)
  const module = angular.module("myApp");

  //create a function -- to use as the controller
  const repoController = function ($scope, $routeParams, github) {
    //functions to call on promise evaluation
    const onRepo = (data) => {
      $scope.repo = data;
    };
    const onError = (res) => {
      $scope.error = res;
    };

    //get the data to pass to the github service from the URL
    const reponame = $routeParams.reponame;
    const username = $routeParams.username;

    //call the github service passing the data and call the evalate funcs on completion
    github.getRepoDetails(username, reponame).then(onRepo, onError);
  };

  //attach controller function to the module
  module.controller("repoController", repoController);
})();
