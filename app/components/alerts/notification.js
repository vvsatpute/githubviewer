angular.module('notifications',[])

.directive('alertNotification',function($timeout){
  return {
    restrict:'A',
    replace:true,
    template:'<div class="alert alert-danger">Error:{{errorMessage}}</div>',
    link:function(scope,element,attributes) {
      $timeout(function(){
        scope.hideFlag = true;
      },3000);
    }
  };
});
