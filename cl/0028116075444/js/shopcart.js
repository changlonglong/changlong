/**
 * Created by hxsd on 2016/10/4.
 */
angular.module("marscart",[])
    .factory("shopcart",function(){
        var cart=[];
        return {
            add:function(product){
                for(var i=0;i<cart.length;i++){
                    var item=cart[i];
                    if(item.product.id==product.id){
                        item.number++;
                        return
                    }
                }
                cart.push({product:product,number:1})
            },
            remove:function(product){
                for(var i=0;i<cart.length;i++){
                    var item=cart[i];
                    if(item.product.id==product.id){
                        item.number--;
                        if(item.number==0){
                            cart.splice(i,1)
                        }
                        return
                    }
                }
            },
            findAll:function(){
                return cart;
            },
            clear:function(){
                cart.length=0;
            }
        };
    })
    /*.controller("cartctrl",function($scope,mycart){
        var cart=mycart.findAll();
        $scope.shopnumber=function(){
            var total=0;
            angular.forEach(cart,function(item){
                total+=item.number;
            });
            return total;

        };
        $scope.shopprice=function(){
            var total=0;
            angular.forEach(cart,function(item){
                total+=item.number*item.product.price;
            });
            return total;

        };
    });*/