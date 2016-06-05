angular.module('ghViewer.projectView',[])

.controller('ProjectViewController',function($scope,gitHubService,$routeParams){
    var username = $routeParams.username;
    var projectname = $routeParams.projectname;

    gitHubService.getContributers(username,projectname).then(function(response){
      $scope.contributers = response.data;
    });

    gitHubService.getProjectDetails(username,projectname).then(function(response){
      $scope.project = response.data;
    });
})

.directive('contributersGrid',function(){
    return {
      restrict:'E',
      replace:true,
      templateUrl:'projectView/cont-grid.html'
    };
})
