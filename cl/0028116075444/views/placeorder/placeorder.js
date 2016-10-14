/**
 * Created by changlong on 2016/10/4 0004.
 */
myApp.controller("placeorder",function($scope,$http){
    $http.get("data/payicon.json").success(function(data){
        $scope.icons=data;
    });
    $scope.chose=function(item){
        angular.forEach($scope.icons,function(data){
            data.ischosed=false;
        });
        item.ischosed=true;
    }
});