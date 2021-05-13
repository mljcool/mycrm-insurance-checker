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
    setChromeIdentity();

    const apply = setApply({ $scope });

    $scope.insuranceInProgress = [];
    $scope.insurancePrevious = [];
    $scope.insuranceExisting = [];

    $scope.ifAnyHasData = false;
    $scope.isProcessing = false;
    $scope.slideSettings = false;
    $scope.switchSettings = false;
    $scope.selectedConnection = {};
    $scope.tabsList = tabsList;
    $scope.tabPresent = 1;
    $scope.insurerList = insurerList;
    $scope.clientList = clientList;

    $scope.showSettings = () => {
      $scope.slideSettings = !$scope.slideSettings;
      apply();
    };
    tabSwitcher({ $scope });
    onConnectAccounts({ $scope, apply, getStoragesToMap });

    $scope.openViewComparison = (client) => {
      client.isSyncing = true;
      const insurance = { syncID: '' };
      setTimeout(() => {
        openComparisonWindow({ insurance });
        client.isSyncing = false;
        apply();
      }, 3500);
      apply();
    };

    $scope.resyncClientData = (client) => {
      client.reSyncData = true;
      triggerResyncOn(client);
      setTimeout(() => {
        client.reSyncData = false;
        apply();
      }, 3500);
      apply();
    };

    getStoragesToMap().then(({ success, results }) => {
      if (success) {
        const {
          clientInfo,
          insuranceInProgress,
          insurancePrevious,
          insuranceExisting,
        } = results;
        const ifAnyHasData =
          insuranceInProgress.length ||
          insurancePrevious.length ||
          insuranceExisting.length;
        if (insuranceInProgress.length) {
          getClientAndBenefits(
            { $scope, clientInfo },
            'insuranceInProgress',
            insuranceInProgress,
          );
        }
        if (insurancePrevious.length) {
          getClientAndBenefits(
            { $scope, clientInfo },
            'insurancePrevious',
            insurancePrevious,
          );
        }
        if (insuranceExisting.length) {
          getClientAndBenefits(
            { $scope, clientInfo },
            'insuranceExisting',
            insuranceExisting,
          );
        }
        $scope.ifAnyHasData = !ifAnyHasData;
        countEachTabs({ $scope });
        apply();
        console.log('$scope.insuranceInProgress', $scope.insuranceInProgress);
        console.log('$scope.insurancePrevious', $scope.insurancePrevious);
        console.log('$scope.insuranceExisting', $scope.insuranceExisting);
      }
    });

    $scope.dataDriller = (ownCover, personId) => {
      const geBenefits = ownCover.filter(
        (cover) => cover.familyClientID == personId,
      ).length;
      return geBenefits;
    };
  },
]);
