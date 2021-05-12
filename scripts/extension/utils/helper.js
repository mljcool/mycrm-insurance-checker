const setApply = ({ $scope }) => {
  return () => {
    setTimeout(() => {
      $scope.$apply();
    }, 200);
  };
};

const toggleSync = ({ $scope }) => {
  $scope.isSyncing = !$scope.isSyncing;
};
