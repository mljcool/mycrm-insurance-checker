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
            name: 'Family Protection',
            amount: 50000,
            icon: 'fp',
          },
          {
            id: 2,
            name: 'Trauma Cover',
            amount: 5000,
            icon: 'tc',
          },
          {
            id: 3,
            name: 'Income Protection',
            amount: 11003,
            icon: 'ip',
          },
          {
            id: 4,
            name: 'Life cover',
            amount: 11003,
            icon: 'lc',
          },
          {
            id: 5,
            name: 'Total Permanent Disability',
            amount: 11003,
            icon: 'tpd',
          },
          {
            id: 6,
            name: 'Reduncy Cover',
            amount: 11003,
            icon: 'rc',
          },
          {
            id: 7,
            name: 'Premium Waiver',
            amount: 11003,
            icon: 'pw',
          },
          {
            id: 8,
            name: 'Mortgage Protection',
            amount: 11003,
            icon: 'mp',
          },
          {
            id: 9,
            name: 'Health Cover',
            amount: 11003,
            icon: 'hc',
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
            name: 'Family Protection',
            amount: 50000,
            icon: 'fp',
          },
          {
            id: 2,
            name: 'Trauma Cover',
            amount: 5000,
            icon: 'tc',
          },
          {
            id: 3,
            name: 'Income Protection',
            amount: 11003,
            icon: 'ip',
          },
          {
            id: 4,
            name: 'Life cover',
            amount: 11003,
            icon: 'lc',
          },
          {
            id: 5,
            name: 'Total Permanent Disability',
            amount: 11003,
            icon: 'tpd',
          },
          {
            id: 6,
            name: 'Reduncy Cover',
            amount: 11003,
            icon: 'rc',
          },
          {
            id: 7,
            name: 'Premium Waiver',
            amount: 11003,
            icon: 'pw',
          },
          {
            id: 8,
            name: 'Mortgage Protection',
            amount: 11003,
            icon: 'mp',
          },
          {
            id: 9,
            name: 'Health Cover',
            amount: 11003,
            icon: 'hc',
          },
        ],
      },
    ];
  },
]);
