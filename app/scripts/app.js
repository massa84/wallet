'use strict';

/**
 * @ngdoc overview
 * @name walletApp
 * @description
 * # walletApp
 *
 * Main module of the application.
 */
angular
	.module('walletApp',
		[
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
		])
	.config(function ($routeProvider)
		{
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/create', {
				templateUrl: 'views/create.html',
				controller: 'CreatewalletCtrl'
			})
			.when('/reset', {
				templateUrl: 'views/reset.html',
				controller: 'ResetwalletCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		});
