angular.module('vidInterface')

.controller('searchCtrl', function($scope, searchMenuService) {

	$scope.instructors = function() {
	}

	$scope.subjects = function() {
		return searchMenuService.getSubjects();
	}

	$scope.hoverIn = function(){
		this.hoverDisplay = true;
	}

	$scope.hoverOut = function() {
		this.hoverDisplay = false;
	}

	$scope.cohorts = {};

	$scope.topRated = {};

});