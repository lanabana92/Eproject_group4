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
        .when("/Account",{
            templateUrl:"Account.html"
        })
        .when("/About",{
            templateUrl:"About.html"
        });
        
    });
    app.controller('Ctr4', function($scope) {
        $scope.brands = ["Honda", "Toyota", "Ford", "Mitsubisi", "Mazda"];
        $scope.chooseBrand = function(){
            if($scope.SelectBrand =="Honda"){
               $scope.names =  ["CRV"];
            } else if ($scope.SelectBrand =="Toyota"){
                $scope.names =  ["Avanza", "Fortuner", "Land Cruiser", "Inova"];
            }else if ($scope.SelectBrand =="Ford"){
                $scope.names =  ["Everest", "Territory"];
            }else if ($scope.SelectBrand =="Mitsubisi"){
                $scope.names =  ["XFC","Xpander","Pajero","Outlander"];
            }else if ($scope.SelectBrand =="Mazda"){
                $scope.names =  ["CX8"];
            }          
        }
        $scope.calculate = function(){
           if($scope.SelectOption == "option2"){
                $scope.total = $scope.price * 0.012;
            }
            else if($scope.SelectOption == "option3"){
                $scope.total = $scope.price * 0.013;
            }
            else if($scope.SelectOption == "option4"){
                $scope.total = $scope.price * 0.014;
            }
            else if($scope.SelectOption == "option5"){
                $scope.total = $scope.price * 0.015;
            } else{
                $scope.total = $scope.price * 0.01;
            }
        }
        $scope.citys = ["Ho Chi Minh", "Hanoi", "Binh Duong", "Can Tho", "Hai Phong"];
    });

    app.controller('Ctr5', function($scope) {
        $scope.brands = ["Honda", "Toyota", "Ford", "Mitsubisi", "Mazda"];
        $scope.chooseBrand = function(){
            if($scope.SelectBrand =="Honda"){
               $scope.names =  ["Civic", "City", "HRV", "Brio", "Accord"];
            } else if ($scope.SelectBrand =="Toyota"){
                $scope.names =  ["Vios", "Altis", "Cross", "Camry", "Yaris"];
            }else if ($scope.SelectBrand =="Ford"){
                $scope.names =  ["Focus", "EcoSport"];
            }else if ($scope.SelectBrand =="Mitsubisi"){
                $scope.names =  ["Attrage"];
            }else if ($scope.SelectBrand =="Mazda"){
                $scope.names =  ["Mazda 2", "Mazda 3","CX5", "Mazda 6", "CX30"];
            }           
        }
        $scope.calculate = function(){
            if($scope.SelectOption == "option2"){
                 $scope.total = $scope.price * 0.012;
             }
             else if($scope.SelectOption == "option3"){
                 $scope.total = $scope.price * 0.013;
             }
             else if($scope.SelectOption == "option4"){
                 $scope.total = $scope.price * 0.014;
             }
             else if($scope.SelectOption == "option5"){
                 $scope.total = $scope.price * 0.015;
             } else{
                 $scope.total = $scope.price * 0.01;
             }
         }
        $scope.citys = ["Ho Chi Minh", "Hanoi", "Binh Duong", "Can Tho", "Hai Phong"];
    });

    app.controller('Ctr6', function($scope) {
        $scope.brands = ["Audi", "Mercedes", "Vovlo", "BMW", "RR"];
        $scope.chooseBrand = function(){
            if($scope.SelectBrand =="Audi"){
               $scope.names =  ["A4", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8"];
            } else if ($scope.SelectBrand =="Mercedes"){
                $scope.names =  ["G-CLASS","A-CLASS","E-CLASS","C-CLASS", "GLS", "MayBack", "GLB", "GLC"];
            }else if ($scope.SelectBrand =="Volvo"){
                $scope.names =  ["S60", "S90", "V90", "CX40", "V60", "Recharge"];
            }else if ($scope.SelectBrand =="BMW"){
                $scope.names =  ["Serie4", "Serie5","Serie7" ,"X7","X6","X4"];
            }          
        }
        $scope.calculate = function(){
            if($scope.SelectOption == "option2"){
                 $scope.total = $scope.price * 0.012;
             }
             else if($scope.SelectOption == "option3"){
                 $scope.total = $scope.price * 0.013;
             }
             else if($scope.SelectOption == "option4"){
                 $scope.total = $scope.price * 0.014;
             }
             else if($scope.SelectOption == "option5"){
                 $scope.total = $scope.price * 0.015;
             } else{
                 $scope.total = $scope.price * 0.01;
             }
         }
        $scope.citys = ["Ho Chi Minh", "Hanoi", "Binh Duong", "Can Tho", "Hai Phong"];
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

    
    app.controller("Ctr3",function($scope){
        $scope.uname = "Admin";
        $scope.pass = "12345678";

    })
    app.controller("Ctr2",function($scope){
         $scope.motorType = "0";   
         $scope.option= "0";      
         $scope.add = function(){
            $scope.year = $scope.option + " years";
        if($scope.motorType == "60000"){
            $scope.type = "Under 50cc"
       } else if ($scope.motorType == "70000"){
            $scope.type = "Above 50cc"
       } else {
            $scope.type = "Electric"
       }
         }
         
    })

    
    
function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    var txt = "User";
    if(un=="Admin" && pw=="12345678"){
        window.location.href="#!Account";
        document.getElementById("textlogo").value = txt;
        document.getElementById("your-image").src="./Asset/img/avatar.png";
    }else{
        alert("UserName:Admin\nPassword:12345678");
    }
	
}
    
  
$(document).ready(function(){
    $(".btn").click(function(){
        $("#myModal").modal('hide');
        $('input:password').val('12345678');
        $('input:text11').val('');
    }); 
});

