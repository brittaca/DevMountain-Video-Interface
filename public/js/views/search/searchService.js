angular.module('vidInterface')

.service('searchService', function($http) {

	var instructors = ['Stephen Brinkworth', 'Ben Callis', 'Brack Carmony', 'Dallin Crane', 'Mikkel Davis', 'Chris Esplin', 'Daniel Falabella', 'Blake Hagen', 'Brett Little', 'Jeremy Robertson', 'Philipp Schulte', 'Dave Smith', 'Jared Stark', 'Jacob Turner', 'Ryan Walsh', 'Matt Winchester'];

	this.getInstructors = function() {
		return instructors;
	}

})