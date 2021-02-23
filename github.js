//initiate an iffy function to avoid global scopes
(function () {
  //create the "service" function and pass dependecies as params
  const github = function ($http) {
    //the two provate functions return promises of the data retrieved
    //from the http request
    const getUser = (username) => {
      return $http
        .get("https://api.github.com/users/" + username)
        .then(function (res) {
          return res.data;
        });
    };

    const getRepos = (user) => {
      return $http.get(user.repos_url).then(function (res) {
        return res.data;
      });
    };

    const getRepoDetails = (username, reponame) => {
      let repo;
      let repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

      return $http.get(repoUrl).then((res) => {
        repo = res.data;
        console.log(repo);
        return repo;
      });
    };

    //the main return returns the two functions to be availlaible on
    //the github object ie. github.getuser()
    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails,
    };
  };

  //create an instance of the main module -- not it is missing array as
  //second arguament as this is to create an instance of an already existing module
  var module = angular.module("myApp");

  //make the service availiable to the application
  module.factory("github", github);
})();
