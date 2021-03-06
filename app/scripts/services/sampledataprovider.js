'use strict';

/**
 * @ngdoc service
 * @name walletApp.sampleDataProvider
 * @description
 * # sampleDataProvider
 * Service in the walletApp.
 */
angular.module('walletApp')
  .service('sampleDataProvider', function sampleDataProvider()
  	{
    var dataProvider =
    	{
    	wallet          : null,
    	currencies      :
    		{
    		'eur' : { label: 'Euro',           code : 'eur' , symbol : '€'},
    		'gbp' : { label: 'Pound sterling', code : 'gbp' , symbol : '£'},
    		'usd' : { label: 'U.S. Dollar',    code : 'usd' , symbol : '$'}
    		},
    	getCurrencies   : function(callback)
    		{
    		if(callback)
    			{callback(this.currencies);}
    		},
    	createWallet    : function(currency,callback)
    		{
    		this.wallet =
    			{
    			currency : currency,
    			total    : 0,
    			transactions : []
    			};
    		if(callback)
    			{callback(this.wallet);}
    		},
    	getWallet       : function(callback)
    		{
			if(callback)
    			{callback(this.wallet);}
    		},
    	resetWallet     : function(callback)
    		{
    		this.wallet = null;

    		if(callback)
    			{callback(this.wallet);}
    		},
    	addTransaction : function(dir,amount,callback)
    		{
    		if(this.wallet)
    			{
    			this.wallet.transactions.push(
		    		{
					dir   : dir,
		    		date  : new Date(),
		    		amount: amount
		    		});
    			this.wallet.total += (dir==='in' ? 1 : -1)*amount;
	    		if(callback)
	    			{callback(this.wallet);}
    			}
    		},
    	};
    return dataProvider;
  });
