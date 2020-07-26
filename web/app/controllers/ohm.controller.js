// /// <reference path="main.js" />

// angular.module('ohmDelivery').controller("tracking", function($scope, $http, ohmService) {
//     $scope.getOhm = function() {
//         ohmService.getOhymByTrackingId(this.trackingId).then(ohm => {
//             console.log('ohm controller', ohm, ohm.status)
//             this.ohm = ohm
//             this.status = this.ohm.status
//             $scope.$apply()
//         }).catch(err =>{
//             this.errorMessage = 'Oops, there was a problem fetching Ohm.'
//         })
//     };
// });
