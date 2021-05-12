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
  $scope[scopeType] = arrangedClientBenefits(clientInfo, insuranceType)
    .sort()
    .reverse();
};
