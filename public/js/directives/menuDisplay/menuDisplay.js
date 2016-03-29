angular.module('vidInterface')

.directive('menuDisplay', function() {

	return {
		restrict: 'E',
		templateUrl: './js/directives/menuDisplay/menuDisplay.html',
		controller: 'mainCtrl'
	};

});