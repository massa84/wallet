'use strict';

describe('Directive: wallet', function () {

  // load the directive's module
  beforeEach(module('walletApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wallet></wallet>');
    element = $compile(element)(scope);
  }));
});
