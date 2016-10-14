// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.message = '';

  $scope.verify = function(string) {
    return string.match(/^\w+$/);
  }

  $scope.signin = function () {
    if (!$scope.verify($scope.user.username)) {
      $scope.user.username = '';
      $scope.user.password = '';
      return $scope.message = 'username is not cool enough';
    }
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.user.username = '';
        $scope.user.password = '';
        console.error(error);
      });
  };

  $scope.signup = function () {
    if (!$scope.verify($scope.user.username)) {
      $scope.user.username = '';
      $scope.user.password = '';
      return $scope.message = 'username is not cool enough';
    }
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.user.username = '';
        $scope.user.password = '';
        console.error(error);
      });
  };


  //temporary
  $scope.logout = function() {
    Auth.signout();
  }
});
