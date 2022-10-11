var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/",{
            templateUrl:"home.html"
        })
        .when("/Car",{
            templateUrl:"car.html"
        })
        .when("/hsbc",{
            templateUrl:"Hsbc.html"
        })
        .when("/About",{
            templateUrl:"contact.html"
        });
    });

    app.controller("Ctr1",function($scope,$http){
        $http.get("Asset/data1.json").then(function(response){

            $scope.food = response.data.menu;
            alert($scope.food);
        })            
        $scope.removeItem = function (x) {    
        $scope.food.splice(x, 1);   
        }  
    })
