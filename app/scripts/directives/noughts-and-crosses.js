'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:noughtsAndCrosses
 * @description
 * # noughtsAndCrosses
 */
angular.module('cvApp')
  .directive('noughtsAndCrosses', function () {
    return {
      templateUrl: 'views/noughts-and-crosses.html',
      scope: {
			datasource: '=',
			add: '&'
		},
     	controller: function($scope) {
     		$scope.reset = function() {
     			$scope._winner = null;
	     		$scope.board = {
	     			1: '',
	     			2: '',
	     			3: '',
	     			4: '',
	     			5: '',
	     			6: '',
	     			7: '',
	     			8: '',
	     			9: ''
	     		};	
     		};
     		$scope.reset();
     		$scope.winConditions = [
     			[1,2,3],
     			[4,5,6],
     			[7,8,9],
     			[1,4,7],
     			[2,5,8],
     			[3,6,9],
     			[1,5,9],
     			[3,5,7]
     		];
     		$scope.icons = {
     			'x': 'clear',
     			'o': 'panorama_fish_eye'
     		};
     		$scope.put = function(n,c) {
     			if(!$scope.board[n] && (c === 'x' || c === 'o')) {
     				if(!$scope.winner()) {
						$scope.board[n] = c;
						$scope.checkWin();

						return c;
     				}
     			}

     			return false;
     		}
     		$scope.winner = function() {
     			var line = $scope.winConditions.filter(function(condition) {
     				return $scope.board[condition[0]] && (
     					$scope.board[condition[0]] === $scope.board[condition[1]] &&
     					$scope.board[condition[0]] === $scope.board[condition[2]]
     				);
     			});

     			if(line.length) {
     				return $scope.board[line[0][0]];
     			}

     			return false;
     		}
     		$scope.checkWin = function() {
     			var w = $scope.winner();
     			if(w) {
     				// console.log("The winner is: "+w);
     				$scope._winner = w;
     			}
     		}
     		$scope.player = function(n) {
 				if($scope.put(n,'x') === 'x') {
 					$scope.computer();	
 				}
     		}
     		$scope.computer = function() {
     			var opened = [];
     			Object.keys($scope.board).forEach(function(n) {
     				if(!$scope.board[n]) {
     					opened.push(n);
     				}
     			});
     			if(opened.length) {
     				var n = opened[Math.floor(Math.random()*opened.length)];
     				$scope.put(n,'o');
     			}
     		}
      		// $scope.throw = function() {
      		// 	var value = Math.ceil(Math.random()*6);
      		// 	// console.log('throw',value);
      		// 	$scope.value = value;
      		// 	$scope.icon = icons[value];

      		// 	if(value === 6) {
      		// 		$mdToast.show(
				    //   $mdToast.simple()
				    //     .textContent('Nice throw! Push the ALT+SHIFT+E to find the Easter Egg...')
				    //     .action('OK')
				    //     .highlightAction(true)
				    //     .position('top right')
				    //     .hideDelay(5000)
				    // );
      		// 	}
      		// }
      	}
    };
  });
