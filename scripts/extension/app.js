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
    $scope.insurerList = insurerList;
    $scope.clientList = clientList;

    $scope.showSettings = () => {
      $scope.slideSettings = !$scope.slideSettings;
      apply();
    };
  },
]);
