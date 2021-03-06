'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
	.controller('MainCtrl',['$scope','$location','persistentDataProvider', function ($scope,$location, dataProvider)
		{
		$scope.wallet = {};
		$scope.currencies = {};
		dataProvider.getCurrencies(function(currencies)
			{
			$scope.currencies = currencies;
			});
		dataProvider.getWallet(function(wallet)
			{
			if(wallet)
				{$scope.wallet = wallet;}
			else
				{$location.path('/create');}
			});
		$scope.addTransaction = function(dir)
			{
			//console.log($scope.withdrawamount,$scope.withdrawamount);
			dataProvider.addTransaction(dir,
				dir === 'in' ? $scope.depositamount : $scope.withdrawamount,
				function(wallet)
					{
					$scope.depositamount = null;
					$scope.withdrawamount = null;

					$scope.wallet = wallet;
					});
			};
		}]);
