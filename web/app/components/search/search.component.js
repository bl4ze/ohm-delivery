function searchController($scope, ohmService) {
    const ctrl = this
    ctrl.getOhm = function () {
        ohmService.getByTrackingId(ctrl.trackingId).then(ohm => {
            ctrl.status = ohm.status
            ctrl.onSearchComplete({ data: ohm })

            $scope.$apply()
        }).catch(err => {
            ctrl.errorMessage = 'Oops, there was a problem fetching Ohm.'
            console.error(err)
        })
    };
}

angular.module('ohmDelivery').component('search', {
    templateUrl: './components/search/search.html',
    controller: searchController,
    bindings: {
        onSearchComplete: '&',
    }
});