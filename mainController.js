//create an instance of the module
var app = angular.module("myApp");

//initialize controller and bring in dependencies strings
app.controller("MainController", [
  "$scope",
  "$interval",
  "$location",
  //add dependencies as function parameters
  function ($scope, $interval, $location) {
    //initiate countdown timer (works almost same as normal JS interval)
    //set a variable to catch the id initiated as null
    let countdownInterval = null;
    const startCountdown = () => {
      //catch the timer in the initiated variable (args: the timer function, milliseconds, number of times to do it)
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = (username) => {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };

    //function that is called by the set interval (decreases $scope.countdown by 1)
    decrementCountdown = () => {
      $scope.countdown--;
      //if countdown reaches zero then call the search function with whatever is in the input
      if ($scope.countdown === 0) {
        $scope.search($scope.username);
      }
    };

    //initial state of countdown
    $scope.countdown = 9;
    //set default value for search (can be changed by ng-model in html)
    $scope.username = "angular";
    //once all is set start the countdown
    startCountdown();
  },
]);
