'use strict';

describe('Directive: workExperience', function () {

  // load the directive's module
  beforeEach(module('cvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<work-experience></work-experience>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the workExperience directive');
  }));
});
