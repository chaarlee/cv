'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:goodIn
 * @description
 * # goodIn
 */
angular.module('cvApp')
  .directive('goodIn', function () {
    return {
      	templateUrl: 'views/good-in.html',
	 	controller: function($scope) {
	  		$scope.selectedItems = [];
	  		$scope.select = function(item) {
	  			if($scope.isSelected(item)) {
					$scope.selectedItems.splice($scope.selectedItems.indexOf(item), 1);
	  			}
	  			else {
	  				$scope.selectedItems.push(item);
	  			}
	  		};
	  		$scope.isSelected = function(item) {
	  			return $scope.selectedItems.indexOf(item) > -1;
	  		}
	  	}
    };
  });
