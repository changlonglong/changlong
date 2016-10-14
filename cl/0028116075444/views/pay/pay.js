/**
 * Created by changlong on 2016/10/5 0005.
 */
myApp.controller("pay",function($scope,shopcart){
    var data=shopcart.findAll();
    $scope.total=0;
    angular.forEach(data,function(item){
        if(data.length>=1){
            $scope.total+=item.product.price*item.number
        }else{
            $scope.total=0;
        }
    });
    $scope.clear=function(){
        shopcart.clear();
    }
});