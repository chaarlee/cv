'use strict';

angular
  .module('cvApp', [
    // 'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    // 'ngRoute',
    // 'ngSanitize',
    'ngMaterial',
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('cvTheme')
      .primaryPalette('light-green')
      // .accentPalette('pink')
      // .warnPalette('red')
      // .backgroundPalette('green')
    $mdThemingProvider.setDefaultTheme('cvTheme');
  });
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/editor.html',
  //       controller: 'EditorCtrl'
  //     })
  //     .when('/print/:cardId?', {
  //       templateUrl: 'views/print.html',
  //       controller: 'PrintCtrl'
  //     })
  //     .when('/printDeck/:deckHash?', {
  //       templateUrl: 'views/printDeck.html',
  //       controller: 'PrintDeckCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // })
  // .config(function ($httpProvider) {
  //   $httpProvider.defaults.useXDomain = true;
  //   $httpProvider.defaults.withCredentials = true;
  //   delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // })
  // .config(function (uiSelectConfig) {
  //   uiSelectConfig.theme = 'bootstrap';
  // })
  // .config(function (localStorageServiceProvider) {
  //   localStorageServiceProvider.setPrefix('cardApp');
  // });