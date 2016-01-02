'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:link
 * @description
 * # link
 */
angular.module('cvApp')
  .directive('links', function () {
    return {
      templateUrl: 'views/links.html'
    };
  });
