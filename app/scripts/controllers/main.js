'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('MainCtrl', function ($scope, $http, $mdDialog) {
    
    $http.get('/resources/data.json').success(function(data) {
    	// console.log("data",data);
     	$scope.data = data;
    });

    $scope.keyPressed = function(e) {
    	console.log(e);
	    if(e.shiftKey && e.keyCode === 69) {
	    	// console.log("Good Job!");
	    	$mdDialog.show(
		      // $mdDialog.alert()
		      //   .clickOutsideToClose(true)
		      //   .title('Opening from the left')
		      //   .textContent('<profile></profile>')
		      //   .ariaLabel('Left to right demo')
		      //   .ok("I can't win! :(")
		      //   // You can specify either sting with query selector
		      //   .openFrom('#dice-game')
		      //   // or an element
		      //   .closeTo(angular.element(document.querySelector('#right')))
		      {
		      	parent: angular.element(document.body),
		      	clickOutsideToClose: true,
		      	template: '<tic-tac-toe></tic-tac-toe>',
		      	ariaLabel: 'Tic Tac Toe'
		      	// openFrom: '#dice-game',
		      	// closeTo: '#dice-game'
		      }
		    );
	    }
	};
  });
