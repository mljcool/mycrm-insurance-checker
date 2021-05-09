var app = angular.module('InsuranceCheckerChromeEx', []);

app.config([
  '$compileProvider',
  function($compileProvider) {
    // ...
    $compileProvider.imgSrcSanitizationWhitelist(
      /^\s*((https?|ftp|file|blob|chrome-extension):|data:image\/)/,
    );
  },
]);

app.controller('appCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    const apply = setApply({ $scope });

    $scope.slideSettings = false;
    $scope.switchSettings = false;
    $scope.selectedConnection = {};
    $scope.insurerList = insurerList;
    $scope.clientList = clientList;

    $scope.showSettings = () => {
      $scope.slideSettings = !$scope.slideSettings;
      apply();
    };

    $scope.onConnect = (data = {}) => {
      $scope.switchSettings = !$scope.switchSettings;
      $scope.selectedConnection = data;
      console.log(`object`, $scope.switchSettings);
      apply();
    };

    $scope.onProceed = (type) => {
      if (type === 'cancel') {
        $scope.onConnect();
        return;
      }
    };
  },
]);
