angular.module('vidInterface')

.service('loginService', function($http) {

	this.getUsers = function() {
		return $http.get('api/users')
		.then(function(response) {
			return response.data;
		})
	}

});