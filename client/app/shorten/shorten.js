angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
	var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  // Your code here
  $scope.link = {};
  $scope.link.url = '';
  $scope.message = '';
  $scope.addLink = function() {
  	if ($scope.link.url.match(rValidUrl)) {
  		Links.addOne($scope.link);
  	} else {
  		$scope.message = 'DO YOU EVEN LYFT BRUH?';
  	}
  };

  $scope.validate = function() {
  	if ($scope.link.url.match(rValidUrl)) {
  		$scope.message = 'HUGE';
  	} else {
  		$scope.message = 'DO YOU EVEN LYFT BRUH?';
  	}
  }
});
