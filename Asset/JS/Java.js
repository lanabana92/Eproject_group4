var app = angular.module('myApp',['ngRoute'])
    app.config(function($routeProvider){
        $routeProvider
        .when("/",{
            templateUrl:"home.html"
        })
        .when("/Car",{
            templateUrl:"car.html"
        })
        .when("/Car2",{
            templateUrl:"car2.html"
        })

        .when("/Feedback",{
            templateUrl:"feedback.html"
        })

        .when("/LuxuryCar",{
            templateUrl:"LuxuryCar.html"
        })
        .when("/hsbc",{
            templateUrl:"Hsbc.html"
        })

        .when("/PTI",{
            templateUrl:"PTI.html"
        })
        .when("/Motor",{
            templateUrl:"motorcycle.html"
        })
<<<<<<< HEAD
        .when("/Account",{
            templateUrl:"Account.html"
=======
        .when("/About",{
            templateUrl:"About.html"
>>>>>>> 74a9abd87d3eb7bccb96828fe19f35b973e0d4ef
        });
    });

    app.controller("Ctr",function($scope,$http){
        $http.get("data.json").then(function(response){
            $scope.car1 = response.data.menu1;
            $scope.car2 = response.data.menu2;
            $scope.car3 = response.data.menu3;
            $scope.car4 = response.data.menu4;
            $scope.car5 = response.data.menu5;
            $scope.car6 = response.data.menu6;
            $scope.car7 = response.data.menu7;
            $scope.car8 = response.data.menu8;
            $scope.car9 = response.data.menu9;
        })            
    })

    app.controller("Ctr2",function($scope){
         $scope.motorType = "60000";   
         $scope.option= "3";
    })

//     app.filter('myFilter',function(){
//         return function () {
//         $scope.year = "years";
//     }
// })
    
    
