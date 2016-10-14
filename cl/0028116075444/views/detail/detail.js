/**
 * Created by hxsd on 2016/9/30.
 */
myApp.controller("detail",function($scope,$stateParams,dataFactory,shopcart,$state,$ionicHistory){
    var id=$stateParams.id;
    var category=$stateParams.category;
    var data = dataFactory.query();
    $scope.similar=[];
    angular.forEach(data.productList, function (item) {
        if (item.id == id) {
            $scope.product = item;
            return false;   // 中断forEach循环 <=> break
        }
        if(item.category==category){
            $scope.similar.push(item)
        }
    });
    $scope.toorder=function(item){
        shopcart.add(item);
        $state.go("order",{id:item.id});
    };
    $scope.addtocart=function(product){
        shopcart.add(product);
    };
    $scope.todetail=function(product){
        $state.go("detail",{id:product.id,category:product.category})
    };
    $scope.back=function(){
        $ionicHistory.goBack();
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