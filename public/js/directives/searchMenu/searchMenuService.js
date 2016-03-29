angular.module('vidInterface')
.service('searchMenuService', function($state, $http, $q) {

	// this.videos = [];

	this.getInstructorVideos = function(instructor) {
		var videosTaught = [];
		var defer = $q.defer();

		$http.get('api/videos')
		.then(function(response) {
			var videos = response.data;

			videos.forEach(function(video) {
				if (videos.instructor === instructor) {
					videosTaught.push(video);
				}
			})
			defer.resolve(videosTaught);
		})
		return defer.promise;
	},

	this.getVideos = function() {

		return $http.get('api/videos')
		.then(function(response) {
			return response.data;
		})
	}




});