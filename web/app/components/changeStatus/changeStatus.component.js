function changeStatusController($scope){
    const ctrl = this

}

angular.module('ohmDelivery').component('changeStatus', {
    templateUrl: './components/changeStatus/changeStatus.html',
    controller: changeStatusController,
    bindings: {
        onStatusChanged: '&',
      }
  });