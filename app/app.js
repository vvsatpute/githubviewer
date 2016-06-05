'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ghViewer.profileView',
  'ghViewer.gitHubServices',
  'ghViewer.projectView',
  'ghViewer.menu',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profileView/profile-view.html',
    controller: 'ProfileViewController'
  })
  .when('/repository/:username',{
    templateUrl:'repoView/repo-view.html',
    controller:'RepoViewController'
  })
  .when('/repository/:username/:projectname',{
    templateUrl:'projectView/project-view.html',
    controller:'ProjectViewController'
  })
  .otherwise({redirectTo: '/profile'});
}]);
