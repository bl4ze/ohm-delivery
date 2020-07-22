
/// <reference path="main.js" />

angular.module('ohmDelivery')
    .factory('ohmService', function ($http) {
        // should go to config service
        const domainPrefix = '/ohms/'

        function getOhymByTrackingId(trackingId) {
            return new Promise(function (resolve, reject) {
                $http.get(`${domainPrefix}${trackingId}`)
                    .then((result) => {
                        console.log('ohm service response', result)
                        resolve(result.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        }

        return {
            getOhymByTrackingId
        }
    })