/**
 * Created by hxsd on 2016/10/4.
 */
myApp.controller("fashionCtrl",function($scope,$http,$state,shopcart){
    $http.get("data/product.json").success(function(data){
        $scope.electronics=data.slice(14,22);
    });
    $scope.todetail=function(product){
        $state.go("detail",{id:product.id,category:product.category})
    };
    $scope.getnumber=function(){
        $scope.data=shopcart.findAll();
        var quantity=0;
        angular.forEach($scope.data,function(item){
            quantity+=item.number;

        });
        return quantity;
    }
});