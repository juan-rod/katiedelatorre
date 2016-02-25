var app = angular.module("app", ['ngRoute','ui.bootstrap']);






app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
     .when('/home',{
        templateUrl : "data/partials/home.html",
        controller : "homeCtrl"
      })
  
      //  .when('/howBout',{
      //   templateUrl : "partials/howBout.html",
      //   controller : "howBoutCtrl"
      // })
      //   .when('/main',{
      //   templateUrl : "partials/main.html",
      //   controller : "mainCtrl"
      // })
      //   .when('/win',{
      //   templateUrl : "partials/win.html",
      //   controller : "winCtrl"
      // })
      .otherwise({
        redirectTo: '/home'
      });
   
  }
  ]);