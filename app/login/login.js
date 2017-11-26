'use strict';

angular.module('myApp.login', ['ngRoute', 'auth'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','AuthService','$location',function($scope, AuthService, $location) {

  var auth = AuthService.getAuth();
  

  $scope.formSubmit = function() {
    console.log($scope.init); 
    console.log("LogIn initialized");
    console.log("username :" + $scope.email);
    console.log("password :" + $scope.password);
    auth.$signInWithEmailAndPassword( $scope.email,$scope.password)
      .then(function(authData) {
        console.log("Logged in as:", authData.uid);
        console.log("authData " + authData);
        $location.path('/gallery');
        auth.login();
      }).catch(function(error) {
       // console.error("Authentication failed:", error);
        console.log(error);
        console.log($scope.logged);
    });

   // console.log(auth.getAuth());
    
  }
}]);