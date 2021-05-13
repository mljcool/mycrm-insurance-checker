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

      getConnectToProvider({ $http, browserId }).then(({ status, data }) => {
        if (status === 200) {
          console.log('getConnectToProvider', results);
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

  const resetForms = ({ selectedConnection }) => {
    selectedConnection.showMessage = false;
    selectedConnection.message = '';
    selectedConnection.username = '';
    selectedConnection.password = '';
  };

  $scope.onProceed = (type, selectedConnection = {}) => {
    getStoragesToMap().then(({ success, results }) => {
      if (success) {
        const { chromeId } = results;
        const { username, password, providerName, id } =
          selectedConnection || {};
        console.log('chromeId', chromeId);
        if (type === 'cancel') {
          $scope.onConnect();
          return;
        }
        if (type === 'connect') {
          if (!username || !password) {
            selectedConnection.showMessage = true;
            selectedConnection.message =
              'Please make sure to provide username or password';
            $scope.$apply();
            return;
          }
          const details = {
            userName: username,
            password: password,
            insurerName: providerName,
            insurerId: id,
            browserId: chromeId,
          };
          postConnectToProvider({ $http, details }).then(
            (success) => {
              console.log('SUCCESS', success);
              resetForms({ selectedConnection });
            },
            (error) => {
              console.log('ERROR', error);
              resetForms({ selectedConnection });
            },
          );
          toggleProcess({ $scope });
          setTimeout(() => {
            toggleProcess({ $scope });
            $scope.$apply();
          }, 3500);

          $scope.$apply();
          return;
        }
        if (type === 'disconnect') {
          toggleProcess({ $scope });
          setTimeout(() => {
            toggleProcess({ $scope });
            apply();
          }, 3500);
          apply();
          return;
        }
      }
    });
  };
};
