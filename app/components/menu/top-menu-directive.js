(function(){
  angular.module('ghViewer.menu',[])

  .directive('headerMenu',function(){

    return {
      restrict:'E',
      replace:true,
      templateUrl:'components/menu/top-menu.html'
    };
  });

})();
