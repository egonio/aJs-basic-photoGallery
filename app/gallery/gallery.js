'use strict';

angular.module('myApp.gallery', ['ngRoute','gallery-service','auth'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['GalleryService','$scope','AuthService','$location',function(GalleryService, $scope,AuthService,$location) {

  var gallery = GalleryService.getObject();

  $scope.gallery = gallery;

  $scope.logout = function(){
    AuthService.logout();
    $location.path('/login');
  }

}]);