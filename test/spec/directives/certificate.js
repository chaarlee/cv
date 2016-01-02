'use strict';

describe('Directive: certificate', function () {

  // load the directive's module
  beforeEach(module('cvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<certificate></certificate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the certificate directive');
  }));
});
