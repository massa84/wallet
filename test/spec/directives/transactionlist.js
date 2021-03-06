'use strict';

describe('Directive: transactionList', function () {

  // load the directive's module
  beforeEach(module('walletApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<transaction-list></transaction-list>');
    element = $compile(element)(scope);
  }));
});
