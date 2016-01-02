'use strict';

describe('Directive: diceGame', function () {

  // load the directive's module
  beforeEach(module('cvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dice-game></dice-game>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the diceGame directive');
  }));
});
