angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	$scope.search = '';
  $scope.data = {};
  $scope.display = [];

  Links.getAll().then(function(links) {
    $scope.data.links = links;
    $scope.display = links.sort( (x, y) => y.visits - x.visits);
    console.log(JSON.stringify(links));
  });

	$scope.filter = function() {
		$scope.display = $scope.data.links.filter( x => x.title.toLowerCase().includes($scope.search));
	}

  $scope.getUrl = function(link) {
  	return link.baseUrl + '/' + link.code;
  }
});
