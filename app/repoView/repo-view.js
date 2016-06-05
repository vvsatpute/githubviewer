angular.module("ghViewer.profileView")

  .controller('RepoViewController',function(gitHubService,$scope,$routeParams){

    $scope.username = $routeParams.username;
    gitHubService.getRepo($scope.username).then(function(response){
        $scope.repos = response.data;
    });
    $scope.setRepoOrder = function(value) {
        $scope.repoOrder = value;
    };
  })
