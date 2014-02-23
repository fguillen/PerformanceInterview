'use strict';

angular.module('performanceInterviewApp')
  .controller('ThanksCtrl', function ($scope, $location) {
    ga('send', 'pageview', {'page': $location.path()});
  });