/**
 * Created by hxsd on 2016/10/4.
 */
myApp.controller("tabs",function($scope,shopcart){
    $scope.getnumber=function(){
        $scope.data=shopcart.findAll();
        var quantity=0;
        angular.forEach($scope.data,function(item){
            quantity+=item.number;

        });
        return quantity;
    };

/*    $scope.badges={number:2};*/

    //$scope.data=shopcart.findAll();
    //    var quantity=0;
    //    angular.forEach($scope.data,function(item){
    //        quantity+=item.number;
    //        alert(123)
    //    });
    //$scope.$watch(shopcart,function(newValue,oldValue){
    //    $scope.data=shopcart.findAll();
    //    var quantity=0;
    //    angular.forEach($scope.data,function(item){
    //        quantity+=item.number;
    //        alert(123)
    //    });
    //    $scope.badges={number:quantity}
    //},true);
});