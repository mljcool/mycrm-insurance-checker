const onConnectAccounts = ({ $scope, apply, getStoragesToMap, $http }) => {
   $scope.onConnect = (data = {}) => {
      $scope.switchSettings = !$scope.switchSettings;
      $scope.selectedConnection = data;
      console.log(`object`, $scope.switchSettings);
      apply();
   };

   getStoragesToMap().then(({ success, results }) => {
      if (success) {
         const { adviserData } = results;
         console.log('adviserData', adviserData);
         $scope.insurerList = $scope.insurerList.map((adviser) => {
            adviser.name = adviserData.preferredFullName;
            return adviser;
         });
         apply();
      }
   });

   getStoragesToMap().then(({ success, results }) => {
      if (success) {
         const { chromeId } = results;
         const browserId = chromeId;
         $scope.browserId = browserId;

         getConnectToProvider({ $http, browserId }).then(({ status, data }) => {
            if (status === 200) {
               console.log('getConnectToProvider', data);
               $scope.insurerList = $scope.insurerList.map((inurances) => {
                  inurances.isConnected = data.some(
                     (ins) => ins.insurerId === inurances.id,
                  );
                  return inurances;
               });
            }
         });
         apply();
      }
   });

   const somethingWentWrong = ({ selectedConnection }) => {
      selectedConnection.showMessage = true;
      selectedConnection.connectError = 1;
      selectedConnection.message =
         'Please make sure to provide username or password';
      $scope.$apply();
   };

   const resetForms = ({ selectedConnection }) => {
      selectedConnection.showMessage = false;
      selectedConnection.message = '';
      selectedConnection.username = '';
      selectedConnection.password = '';
      setTimeout(() => {
         toggleProcess({ $scope });
         $scope.$apply();
      }, 200);
   };

   $scope.onProceed = (type, selectedConnection = {}) => {
      getStoragesToMap().then(({ success, results }) => {
         if (success) {
            const { chromeId, adviserData } = results;
            const { username, password, providerName, id } =
               selectedConnection || {};
            console.log('chromeId', chromeId);
            if (type === 'cancel') {
               $scope.onConnect();
               return;
            }
            if (type === 'connect') {
               if (!username || !password) {
                  somethingWentWrong({ selectedConnection });
                  return;
               }

               const details = {
                  userName: username,
                  password: password,
                  insurerName: providerName,
                  insurerId: id,
                  browserId: chromeId,
                  title: ACCESS_TYPE[adviserData.accessType],
                  firstName: adviserData.firstName,
                  lastName: adviserData.lastName,
               };
               console.log('ACCESS_TYPE', ACCESS_TYPE);
               toggleProcess({ $scope });
               postConnectToProvider({ $http, details }).then(
                  (success) => {
                     resetForms({ selectedConnection });
                     if (!success.data) {
                        selectedConnection.showMessage = true;
                        selectedConnection.connectError = 2;
                        selectedConnection.message =
                           'Oops! Something went wrong.';

                        return;
                     }
                     console.log('SUCCESS', success);
                     selectedConnection.isConnected = true;
                  },
                  (error) => {
                     console.log('ERROR', error);
                     selectedConnection.showMessage = true;
                     selectedConnection.message = error;
                  },
               );

               $scope.$apply();
               return;
            }
            if (type === 'disconnect') {
               console.log(selectedConnection);
               toggleProcess({ $scope });
               const { id, providerNameLowerCases } = selectedConnection;
               const details = {
                  browserId: $scope.browserId,
                  insurerId: id,
                  insurerName: providerNameLowerCases,
               };
               deleteCredentials({ $http, details }).then((success) => {
                  console.log('success', success);
                  toggleProcess({ $scope });
                  selectedConnection.isConnected = false;
                  apply();
               });
               apply();
               return;
            }
         }
      });
   };
};
