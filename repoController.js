(function () {
  const module = angular.module("myApp");

  const repoController = function ($scope, $routeParams, github) {
    const onRepo = (data) => {
      $scope.repo = data;
    };

    const onError = (res) => {
      $scope.error = res;
    };

    const reponame = $routeParams.reponame;
    const username = $routeParams.username;

    github.getRepoDetails(username, reponame).then(onRepo, onError);
  };

  module.controller("repoController", repoController);
})();
