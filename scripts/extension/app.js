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

      $scope.insuranceListScraping = [];

      $scope.triggerRerun = false;
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
      $scope.isScraping = false;
      $scope.isChecking = false;
      $scope.onProgress = true;

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

      $scope.resyncClientData = (client) => {
         client.reSyncData = true;
         triggerResyncOn(client);
         setTimeout(() => {
            client.reSyncData = false;
            apply();
         }, 3500);
         apply();
      };

      $scope.reRunScraping = () => {
         let totalProvider = 1;
         chrome.runtime.sendMessage('', {
            type: 're-scraping',
         });
         $scope.triggerRerun = true;
         chrome.runtime.onMessage.addListener((data) => {
            if (data.type === 'stop') {
               $scope.triggerRerun = false;
               apply();
            }
         });
         apply();
      };

      $scope.removeSpaces = (textLogo = '') => {
         return removeSpaces(textLogo);
      };

      $scope.setStorage = () => {
         getStoragesToMap().then(({ success, results }) => {
            if (success) {
               const { clientInfo, errorStatus, dataScrapted } = results;
               if (clientInfo.length) {
                  console.log('clientInfo', clientInfo);
                  $scope.clientList = clientInfo;
               }
               // EachTabs({ $scope });

               if (dataScrapted.length && !!dataScrapted) {
                  $scope.insuranceListScraping = dataScrapted;
                  $scope.isChecking = false;
                  $scope.onProgress = false;
                  $scope.isScraping = true;
               } else {
                  $scope.insuranceListScraping = [];
               }

               if (!!errorStatus) {
                  const { hasError, dataError } = errorStatus;

                  $scope.hasError = hasError;
                  $scope.errorObj = JSON.parse(dataError);
                  console.log('$scope.insuranceInProgress', $scope.errorObj);
               }
               console.log('dataScrapted', dataScrapted);
            }
         });
      };
      $scope.setStorage();

      $scope.onChecking = () => {
         let totalProvider = 1;
         $scope.isChecking = true;
         chrome.runtime.sendMessage('', {
            type: 'scraping',
         });
         chrome.runtime.onMessage.addListener((data) => {
            if (data.type === 'stop') {
               $scope.isScraping = true;
               $scope.setStorage();

               console.log('stop_checking', totalProvider);
               const allConnected = $scope.insurerList.filter(
                  (insure) => insure.isConnected,
               ).length;
               console.log('allConnected', allConnected);
               if (totalProvider === allConnected) {
                  $scope.isChecking = false;
                  $scope.onProgress = false;
               }
               totalProvider++;
               apply();
            }
         });

         apply();
      };
   },
]);
