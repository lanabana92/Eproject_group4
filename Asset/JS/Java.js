var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/home",{
            templateUrl:"home.html"
        })
        .when("/Car",{
            templateUrl:"car.html"
        })

        .when("/Car2",{
            templateUrl:"car2.html"
        })
        .when("/hsbc",{
            templateUrl:"Hsbc.html"
        })
        .when("/About",{
            templateUrl:"contact.html"
        });
    });

    app.controller("Ctr1",function($scope,$http){
        $http.get("data1.json").then(function(response){
            $scope.car = response.data1.menu;            
        })            
    })
