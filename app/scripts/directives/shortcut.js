'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:shortcut
 * @description
 * # shortcut
 */
angular.module('cvApp')
  .directive('shortcut', function () {
    return {
      	restrict: 'E',
	    replace: true,
	    scope: true,
	    link:    function postLink(scope, iElement, iAttrs){
	  		document.addEventListener("keypress", function(e) {
	  			scope.$apply(scope.keyPressed(e));
	  		});
	    }
    };
});