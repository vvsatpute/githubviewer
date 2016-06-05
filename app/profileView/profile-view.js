'use strict';

angular.module('ghViewer.profileView', ['ngRoute'])

.controller('ProfileViewController', ['$scope','gitHubService','$timeout',function($scope,gitHubService,$timeout) {

  $scope.username= "vvsatpute";
  $scope.alerts = [];

  var onUserComplete = function(response) {
    $scope.user = response.data;
  };
  var onError = function(reason) {
    $scope.user = {
      avatar_url:'images/user_not_found.png'
    };
    $scope.alerts.push("No such user found!");
    $timeout(function(){
      $scope.alerts.pop();
    },3000);
  };
  $scope.searchProfile = function() {
    if($scope.username) {
      gitHubService.getUser($scope.username).then(onUserComplete,onError);
    }
  };
}]);
