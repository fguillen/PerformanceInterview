'use strict';

var INTERVIEW;

angular.module('performanceInterviewApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'InterviewCtrl'
      })
      .when('/pages/:page_id', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .otherwise({
        templateUrl: '404.html'
      });
  });
