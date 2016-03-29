angular.module('vidInterface')

.controller('directoryCtrl', function($scope, Video) {

	var video = Video.get({ id: $scope.id }, function() {
		console.log(video);
	})

	var videos = Video.query(function() {
		console.log(videos);
	})

	$scope.video = new Video();

	$scope.video.$save(function() {
		$scope.video;
	})

	$scope.comment = Video.get({ id: $scope.id }, function() {
		$scope.video.data = "comments?";
		$scope.video.$update(function() {

		});
	})



	$scope.doSearch = function () {

    var type = $scope.mediaType;
    $scope.foundItems = directoryService.search().length;
    console.log("Found items :"+ $scope.foundItems + "for search term :"+ $scope.searchTerm);
    $location.path("/search");
	}

})