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
