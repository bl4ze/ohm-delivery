/// <reference path="./lib/angular.js" />
var app = angular
    .module("ohmDelivery", [])
    .controller("tracking", function($scope, $http, ohmService) {
        $scope.getOhm = function() {
            ohmService.getOhymByTrackingId(this.trackingId).then(ohm => {
                console.log('ohm controller', ohm, ohm.status)
                this.status = ohm.status
            }).catch(err =>{
                this.errorMessage = 'Oops, there was a problem fetching Ohm.'
            })
        };
    });