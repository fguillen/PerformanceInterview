'use strict';

angular.module('performanceInterviewApp')
  .controller('InterviewCtrl', function ($scope) {
    INTERVIEW = new Interview(DATA);
    $scope.interview = INTERVIEW;
  });