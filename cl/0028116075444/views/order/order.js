/**
 * Created by hxsd on 2016/10/4.
 */
myApp.controller("order",function($scope,$stateParams,dataFactory,shopcart){
    var id=$stateParams.id;
    var data=dataFactory.query();
    angular.forEach(data.productList,function(product){
        if(product.id==id){
            $scope.data=product
        }
    });
    $scope.quantity=1;
    $scope.minus=function(){
        if($scope.quantity>1){
            $scope.quantity--;
            shopcart.remove($scope.data)
        }
    };
    $scope.plus=function(){
        $scope.quantity++;
        shopcart.add($scope.data)
    }
});