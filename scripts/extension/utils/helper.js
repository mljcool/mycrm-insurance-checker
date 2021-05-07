const setApply = ({ $scope }) => {
  return () => {
    setTimeout(() => {
      $scope.$apply();
    }, 200);
  };
};
