angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(links) {
    $scope.data.links = links;
    console.log(JSON.stringify(links));
  });

  $scope.getUrl = function(link) {
  	return link.baseUrl + '/' + link.code;
  }
});
