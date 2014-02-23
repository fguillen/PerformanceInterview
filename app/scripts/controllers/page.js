'use strict';

angular.module('performanceInterviewApp')
  .controller('PageCtrl', function ($scope, $location, $routeParams) {
    console.log("PageCtrl");

    if(!INTERVIEW) {
      $location.path('/');
      return;
    }


    $scope.page = INTERVIEW.page_by_id($routeParams.page_id);

    ga('send', 'pageview', {'page': $location.path()});
  });
