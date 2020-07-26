angular.module('ohmDelivery')
    .factory('ohmService', function ($http) {
        // should go to config service
        const domainPrefix = '/ohms/'

        function getByTrackingId(trackingId) {
            return new Promise(function (resolve, reject) {
                $http.get(`${domainPrefix}${trackingId}`)
                    .then((result) => {
                        resolve(result.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        }

        function update(trackingId, ohm){
            return new Promise(function (resolve, reject) {
                $http.put(`${domainPrefix}${trackingId}`, {ohm})
                    .then((result) => {
                        resolve(result.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        }

        return {
            getByTrackingId,
            update
        }
    })