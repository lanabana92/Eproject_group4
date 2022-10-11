var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/home",{
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
        $http.get("data1.json").then(function(response){
<<<<<<< HEAD
            $scope.car = response.data1.menu;            
        })            
        
=======

            $scope.food = response.data.menu;
        })            
>>>>>>> f78f4a2fce0b71c9e253fc194707aa28a5f1d355
    })
