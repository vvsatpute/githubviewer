(function(){
  angular.module('ghViewer.gitHubServices',[])

  .factory('gitHubService',function($http,apiUrl,projectUrl){
    var getUser = function(username) {
      return $http.get(apiUrl + username);
    };
    var getRepo = function(username) {
      return $http.get(apiUrl + username + "/repos");
    };
    var getContributers = function(username,projectname) {
      return $http.get(projectUrl + username + "/" + projectname + "/contributors");
    };
    var getProjectDetails = function(username,projectname) {
      return $http.get(projectUrl + username + "/" + projectname);
    }
    return {
      getUser:getUser,
      getRepo:getRepo,
      getContributers:getContributers,
      getProjectDetails:getProjectDetails
    };
  })

  .value('apiUrl','https://api.github.com/users/')

  .value('projectUrl','https://api.github.com/repos/')

})();
