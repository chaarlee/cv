'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:introduction
 * @description
 * # introduction
 */
angular.module('cvApp')
  .directive('introduction', function () {
    return {
      templateUrl: 'views/introduction.html'
    };
  });
