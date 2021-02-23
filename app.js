(() => {
  var app = angular.module("myApp", ["ngRoute"]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController",
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "userController",
      })
      .when("/repos/:username/:reponame", {
        templateUrl: "repo.html",
        controller: "repoController",
      })
      .otherwise({ redirectTo: "/main" });
  });
})();
