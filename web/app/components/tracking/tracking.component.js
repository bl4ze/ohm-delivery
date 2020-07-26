function trackingController($scope){
    const ctrl = this
    ctrl.ohmData = {}

    ctrl.onSearchComplete = function(data) {
        ctrl.ohmData = data
    }

    ctrl.onStatusChanged = function() {
        setTimeout(() => {
            ctrl.ohmData = {}
            $scope.$apply()
        }, 3000);
    }
}

angular.module('ohmDelivery').component('tracking', {
    templateUrl: './components/tracking/tracking.html',
    controller: trackingController,
  });