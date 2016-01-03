'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:diceGame
 * @description
 * # diceGame
 */
angular.module('cvApp')
  .directive('diceGame', function ($mdToast) {

  	var icons = {
  		1: 'looks_one',
  		2: 'looks_two',
  		3: 'looks_3',
  		4: 'looks_4',
  		5: 'looks_5',
  		6: 'looks_6'
  	};

    return {
     	templateUrl: 'views/dice-game.html',
     	scope: {
			 datasource: '=',
			 add: '&'
		  },
     	controller: function($scope) {
      		$scope.roll = function() {
      			var value = Math.ceil(Math.random()*6);
      			// console.log('throw',value);
      			$scope.value = value;
      			$scope.icon = icons[value];

      			if(value === 6) {
      				$mdToast.show(
				      $mdToast.simple()
				        .textContent('Nice roll! Push the SHIFT+E to find the Easter Egg...')
				        .action('OK')
				        .highlightAction(true)
				        .position('top right')
				        .hideDelay(5000)
				    );
      			}
      		}
      	}
    };
  });
