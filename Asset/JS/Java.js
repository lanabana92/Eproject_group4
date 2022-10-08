var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/",{
            templateUrl:"home.html"
        })
        .when("/Car",{
            templateUrl:"car.html"
        })
        .when("/CarIn",{
            templateUrl:"CarInsurance.html"
        })
        .when("/About",{
            templateUrl:"contact.html"
        });
    });