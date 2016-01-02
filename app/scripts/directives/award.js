'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:awards
 * @description
 * # awards
 */
angular.module('cvApp')
  .directive('award', function () {
    return {
      templateUrl: 'views/award.html'
    };
  });
