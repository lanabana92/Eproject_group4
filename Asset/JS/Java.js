var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/",{
            templateUrl:"home.html"
        })
        .when("/Product",{
            templateUrl:"product.html"
        })
        .when("/About",{
            templateUrl:"about.html"
        })
        .when("/Contact",{
            templateUrl:"contact.html"
        });
    });