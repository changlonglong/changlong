/**
 * Created by hxsd on 2016/10/4.
 */
myApp.controller("cart",function($scope,shopcart,$ionicHistory){
    $scope.data=shopcart.findAll();
    $scope.minus=function(product){
        shopcart.remove(product)
    };
    $scope.plus=function(product){
        shopcart.add(product)
    };
    $scope.gettotal=function(){
        var total=0;
        angular.forEach($scope.data,function(item){
            if($scope.data.length>=1){
                total+=item.product.price*item.number
            }else{
                total=0;
            }
        });
        return total;
    };

    $scope.clear=function(){
        shopcart.clear();
    }
    $scope.back=function(){
        $ionicHistory.goBack();
    }
});