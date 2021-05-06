var app = angular.module('InsurancCheckecChromeEx', []);

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
    $scope.clientList = [
      { id: 1, fname: 'Frank', lname: 'Beans', prefix: 'FB' },
      { id: 2, fname: 'Ryan', lname: 'Sandoval', prefix: 'RS' },
    ];
  },
]);
