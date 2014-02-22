'use strict';

var INTERVIEW;

angular.module('performanceInterviewApp', [
  'ngRoute',
  'btford.markdown'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/interview.html',
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
