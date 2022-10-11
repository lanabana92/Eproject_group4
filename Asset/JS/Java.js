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