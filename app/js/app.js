'use strict';


// Declare app level module which depends on filters, and services
angular.module('smartApp', [
  'ngRoute',
  'ui.bootstrap',      // Use either ui.bootstrap or jquery/bootstrap
  'smartApp.filters',
  'smartApp.services',
  'smartApp.directives',
  'smartApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homeController'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);