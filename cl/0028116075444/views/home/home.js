/**
 * Created by hxsd on 2016/9/29.
 */
myApp.controller("home",function($scope,dataFactory,$state,shopcart){
    var promise=dataFactory.query();

        $scope.data=promise;



    $scope.todetail=function(product){
        $state.go("detail",{id:product.id,category:product.category})
    }
});