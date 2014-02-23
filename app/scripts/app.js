'use strict';

var INTERVIEW;
var API_KEY = "oePNMOEDVJQ6VA6qVqrw5g";

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
      .when('/thanks', {
        templateUrl: 'views/thanks.html'
      })
      .otherwise({
        templateUrl: '404.html'
      });
  });
