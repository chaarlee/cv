'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $http.get('/resources/data.json').success(function(data) {
    	// console.log("data",data);
     	$scope.data = data;
    });
  });
