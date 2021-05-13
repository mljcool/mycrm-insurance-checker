const setApply = ({ $scope }) => {
  return () => {
    setTimeout(() => {
      $scope.$apply();
    }, 200);
  };
};

const toggleProcess = ({ $scope }) => {
  $scope.isProcessing = !$scope.isProcessing;
};

const arrangedClientBenefits = (clients = [], insurers = []) => {
  const newSet =
    clients.map((data = {}, index) => {
      data.myBenefits = insurers.map((benefit = {}) => {
        benefit.ownCover = benefit.benefitDetails.filter(
          (ins = {}) =>
            parseInt(ins.familyClientID) === parseInt(data.personId),
        );
        return benefit;
      });
      data.insurersList = insurers;
      return data;
    }) || [];
  return newSet;
};

const getClientAndBenefits = (
  { $scope, clientInfo },
  scopeType,
  insuranceType,
) => {
  $scope[scopeType] = arrangedClientBenefits(clientInfo, insuranceType);
};

const tabSwitcher = ({ $scope }) => {
  $scope.switchTabs = (tab) => {
    $scope.tabsList.forEach((element) => {
      if (element.tabId !== tab.tabId) {
        element.isActive = false;
      } else {
        element.isActive = true;
        $scope.tabPresent = tab.tabId;
      }
    });
  };
};

const countEachTabs = ({ $scope }) => {
  $scope.tabsList = $scope.tabsList.map((tab) => {
    if (tab.tabId === 1) {
      const totalLength =
        $scope.insuranceInProgress.length +
        $scope.insurancePrevious.length +
        $scope.insuranceExisting.length;
      tab.total = totalLength;
    }

    if (tab.tabId === 2) {
      const totalLength = $scope.insuranceInProgress.length;
      tab.total = totalLength;
    }

    if (tab.tabId === 3) {
      const totalLength =
        $scope.insurancePrevious.length + $scope.insuranceExisting.length;
      tab.total = totalLength;
    }

    return tab;
  });
};
