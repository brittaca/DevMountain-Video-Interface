angular.module('vidInterface', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('landing', {
				url: '/login',
				templateUrl: './js/views/landing/land.html'
			})
			.state('dash', {
				url: '/dash',
				templateUrl: './js/views/dash/dash.html'
			})
			.state('search', {
				url: '/search',
				templateUrl: './js/views/search/search.html'
			})
			.state('watch', {
				url: ':id/watch',
				templateUrl: './js/views/watch/watch.html'
			})
			.state('comment', {
				url: ':id/comment',
				templateUrl: './js/views/watch/watch.html'
			})

		$urlRouterProvider
			.otherwise ('/');
	})