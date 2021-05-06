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
      {
        id: 1,
        fname: 'Frank',
        lname: 'Beans',
        prefix: 'FB',

        covers: [
          {
            id: 1,
            name: 'Life Cover',
            amount: 50000,
          },
          {
            id: 2,
            name: 'Trauma Cover',
            amount: 5000,
          },
          {
            id: 3,
            name: 'Income Protection ',
            amount: 11003,
          },
        ],
      },
      {
        id: 2,
        fname: 'Ryan',
        lname: 'Sandoval',
        prefix: 'RS',
        covers: [
          {
            id: 1,
            name: 'Life Cover',
            amount: 213132,
          },
          {
            id: 2,
            name: 'Trauma Cover',
            amount: 5000,
          },
          {
            id: 3,
            name: 'Income Protection ',
            amount: 11003,
          },
        ],
      },
    ];
  },
]);
