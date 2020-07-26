function changeStatusController($scope, ohmService){
    const ctrl = this
    ctrl.changeStatus = function(){
        const updated = {...ctrl.ohmData, status: ctrl.status, refusalReason: ctrl.refusalReason}

        ohmService.update(ctrl.ohmData.trackingId, updated).then(res=>{
            ctrl.success = true
            ctrl.onStatusChanged()
            $scope.$apply()
        }).catch(err => {
            console.error('change status err', err)
            ctrl.errorMessage = 'Error changing status'
            $scope.$apply()
        })
    }
}

angular.module('ohmDelivery').component('changeStatus', {
    templateUrl: './components/changeStatus/changeStatus.html',
    controller: changeStatusController,
    bindings: {
        ohmData: '<',
        onStatusChanged: '&',
      }
  });