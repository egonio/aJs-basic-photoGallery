'use strict';

angular.module('auth', ["firebase"])

.service('AuthService', ["$firebaseAuth",function($firebaseAuth) {

  var auth = $firebaseAuth();
  
  var logged = 'false';

  this.getAuth = function(){
    return auth;
  }

  this.isLogged = function(){
    return logged;
  }
  this.login = function(){
    logged = true;
  }

  this.logout = function(){
    logged = false;
  }



}]);