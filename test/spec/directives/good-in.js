'use strict';

describe('Directive: goodIn', function () {

  // load the directive's module
  beforeEach(module('cvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<good-in></good-in>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the goodIn directive');
  }));
});
