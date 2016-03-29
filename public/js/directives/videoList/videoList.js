angular.module('vidInterface')

.directive('videoList', function() {

	return {
		restrict: 'E',
		templateUrl: './js/directives/videoList/videoList.html',
		controller: 'mainCtrl'
		scope: {
			instructor: '='
		},
		link: function(scope, eleme, attr) {
			scope.toggle = function() {
				scope.show = !scope.show;
			};
		}
	};

});