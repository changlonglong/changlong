/**
 * Created by hxsd on 2016/9/27.
 */
var myApp=angular.module("myApp",["ionic","marscart"]);
myApp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html",
        controller:"tabs"
    }).state("tabs.categorytabs",{
        url:"/categorytabs",
        /*abstract:true,*/
        views:{"tab-category":{
            templateUrl:"views/categorytabs/categorytabs.html"
        }}
    }).state("tabs.categorytabs.electronic",{
        url:"/electronic",
        views:{"tab-electronic":{
            templateUrl:"views/electronic/electronic.html",
            controller:"electronicCtrl"
        }}
    }).state("tabs.categorytabs.fashion",{
        url:"/fashion",
        views:{"tab-fashion":{
            templateUrl:"views/fashion/fashion.html",
            controller:"fashionCtrl"
        }}
    }).state("tabs.categorytabs.live",{
        url:"/live",
        views:{"tab-life":{
            templateUrl:"views/live/live.html",
            controller:"liveCtrl"
        }}
    }).state("tabs.categorytabs.kids",{
        url:"/kids",
        views:{"tab-kids":{
            templateUrl:"views/kids/kids.html",
            controller:"kidsCtrl"
        }}
    }).state("tabs.offers",{
        url:"/offers",
       views:{"tab-offers":{
           templateUrl:"views/offers/offers.html"
       }}
    }).state("tabs.home",{
        url:"/home",
        views:{"tab-home":{
            templateUrl:"views/home/home.html",
            controller:"home"
        }}
    }).state("tabs.cart",{
        url:"/cart",
        cache:false,
        views:{"tab-cart":{
            templateUrl:"views/cart/cart.html",
            controller:"cart"
        }}
    }).state("detail",{
        url:"/detail?:id:category",
        templateUrl:"views/detail/detail.html",
        controller:"detail"
    }).state("order",{
        url:"/order?:id",
        templateUrl:"views/order/order.html",
        controller:"order"
    }).state("shipping",{
        url:"/shipping",
        templateUrl:"views/shipping/shipping.html",
        controller:"shipping"
    }).state("placeorder",{
        url:"/placeorder",
        templateUrl:"views/placeorder/placeorder.html",
        controller:"placeorder"
    }).state("pay",{
        url:"/pay",
        templateUrl:"views/pay/pay.html",
        controller:"pay"
    }).state("ordersent",{
        url:"/ordersent",
        templateUrl:"views/ordersent/ordersent.html"
    }).state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html"
    });
    $urlRouterProvider.otherwise("/tour")
});
myApp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("data/product.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
 //$q 是内置服务，所以可以直接使用
 //创建一个Service，它负责从服务器请求商品数据，并全局共享
/*
myApp.factory("dataFactory", function ($http, $q) {
    return {
        query: function () {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
            $http.get("data/product.json")
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
                });
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
        } // end query
    };
});*/

//侧滑菜单-----------------
myApp.controller("slidemenu",function($scope){
    $scope.isshow=false;
    $scope.isshow2=false;
    $scope.change=function(){
        $scope.isshow=!$scope.isshow;
        $scope.isshow2=false;
    };
    $scope.change2=function(){
        $scope.isshow2=true;
        $scope.isshow=false;
    }
});
