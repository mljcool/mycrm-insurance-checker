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

      $scope.insuranceListScraping = sampleResponse;

      $scope.hasError = false;
      $scope.errorObj = false;
      $scope.ifAnyHasData = false;
      $scope.isProcessing = false;
      $scope.slideSettings = false;
      $scope.switchSettings = false;
      $scope.selectedConnection = {};
      $scope.tabsList = tabsList;
      $scope.tabPresent = 1;
      $scope.insurerList = insurerList;
      $scope.clientList = clientList;

      $scope.openViewLink = (link) => {
         console.log(link);
         window.open(link, '_blank').focus();
      };

      $scope.showSettings = () => {
         $scope.slideSettings = !$scope.slideSettings;
         apply();
      };
      tabSwitcher({ $scope });
      onConnectAccounts({ $scope, apply, getStoragesToMap, $http });

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
            const { clientInfo, errorStatus } = results;
            if (clientInfo.length) {
            }
            // EachTabs({ $scope });

            if ('hasError' in errorStatus) {
               const { hasError, dataError } = errorStatus;

               $scope.hasError = hasError;
               $scope.errorObj = JSON.parse(dataError);
               console.log('$scope.insuranceInProgress', $scope.errorObj);
            }

            apply();

            console.log('$scope.errorStatus', errorStatus);
         }
      });
   },
]);
