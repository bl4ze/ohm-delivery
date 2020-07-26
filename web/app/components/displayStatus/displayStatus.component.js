function displayStatusController($scope){
    const ctrl = this

}

angular.module('ohmDelivery').component('displayStatus', {
    templateUrl: './components/displayStatus/displayStatus.html',
    controller: changeStatusController,
    bindings: {
        status: '<',
      }
  });