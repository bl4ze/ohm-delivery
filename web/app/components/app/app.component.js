function appController($scope, $http, ohmService) {

    this.$onInit = function() {
        console.log('app init')
    }
}

angular.module('ohmDelivery').component('app', {
    templateUrl: './components/app/app.html',
    controller: appController,
  });