angular.module('vidInterface')

.directive('searchMenu', function() {

	return {
		restrict: 'E',
		templateUrl: './js/directives/searchMenu/searchMenu.html',
		controller: 'mainCtrl',
		scope: {
			instructor: '='
		}
	}

});
