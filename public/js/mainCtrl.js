angular.module('vidInterface')

.controller('mainCtrl', function($scope, searchMenuService) {

	$scope.test = 'Video Archives';

	$scope.videos = []

	$scope.topics = [];

	$scope.instructors = [];

	$scope.cohorts = [];

	$scope.ratingsAverages = [];

	$scope.topRated = [];

	$scope.toggleTopics = function() {
		$scope.showTopics = !$scope.showTopics;
	};

	$scope.toggleInst = function() {
		$scope.showInst = !$scope.showInst;
	};

	$scope.toggleInstVids= function() {
		$scope.showInstVids = !$scope.showInstVids;
	};

	$scope.toggleCoh = function() {
		$scope.showCoh = !$scope.showCoh;
	};

	$scope.toggleTop = function() {
		$scope.showTop = !$scope.showTop;
	};

	$scope.toggleAll = function() {
		$scope.showAll = !$scope.showAll;
	};

	$scope.getVideos = function() {
		searchMenuService.getVideos()
		.then(function(response) {
			response.forEach( function(video) {
				$scope.videos.push(video);
			})
			console.log("lolo", $scope.videos);
			$scope.getInstructors();
			$scope.getTopics();
			$scope.getCohorts();
			$scope.getAvgRatings();
			$scope.getTopRated();
			console.log($scope.getInstructorVideos('Dan Falla'));
		})
	}

	$scope.getVideos();

	$scope.getTopics = function() {
		$scope.videos.forEach(function(video) {
			for(var i = 0; i < video.topics.length; i++) {
				if ($scope.topics.indexOf(video.topics[i]) === -1) {
					$scope.topics.push(video.topics[i]);
				}
			}
		})
		console.log($scope.topics);
	}

	$scope.getInstructors = function() {
		$scope.videos.forEach(function(video) {
			if ($scope.instructors.indexOf(video.instructor) === -1) {
				$scope.instructors.push(video.instructor);
			}
		})
		console.log($scope.instructors);
	}

	$scope.getInstructorVideos = function(instructor) {
		var instructorVideos = [];
		$scope.videos.forEach(function(video) {
			if (instructor === video.instructor) {
				instructorVideos.push(video);
			}	
		})
		$scope.instructorVideos = instructorVideos;
		console.log($scope.instructorVideos);
		return $scope.instructorVideos;
	}


	$scope.getCohorts = function() {
		$scope.videos.forEach(function(video) {
			if ($scope.cohorts.indexOf(video.cohort) === -1) {
				$scope.cohorts.push(video.cohort);
			}
		})
		console.log($scope.cohorts);
	}

	$scope.getAvgRatings  = function() {
		$scope.videos.forEach(function(video) {
			var sum = 0;
			for (var i = 0; i < video.ratings.length; i++) {
				sum = sum + video.ratings[i].stars;
			}
			$scope.ratingsAverages.push(sum/video.ratings.length);
		})
		console.log($scope.ratingsAverages);
	}

	$scope.getTopRated = function() {
		$scope.videos.forEach(function(video) {
			var sum = 0;
			for (var i = 0; i < video.ratings.length; i++) {
				sum = sum + video.ratings[i].stars;
			}
				if (sum/video.ratings.length >= 4) {
					$scope.topRated.push(video);
				}
		})
		console.log($scope.topRated);
	}
	

	var queryObj = {
	cohort: 41
	}

});