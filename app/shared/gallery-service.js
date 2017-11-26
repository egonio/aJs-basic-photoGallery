'use strict';

angular.module('gallery-service', ["firebase"])

.service('GalleryService', ['$firebaseObject',function($firebaseObject) {

var ref = firebase.database().ref();


var firebaseObject = $firebaseObject(ref.child('0').child('gallery'));
this.getObject = function(){
    return firebaseObject;
}


}]);