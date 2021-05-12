const onConnectAccounts = ({ $scope, apply, getStoragesToMap }) => {
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
      console.log('$scope.insurerList', $scope.insurerList);
      console.log('$scope.adviserData', adviserData);
      apply();
    }
  });

  $scope.onProceed = (type) => {
    if (type === 'cancel') {
      $scope.onConnect();
      return;
    }
    if (type === 'connect') {
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
  };
};
