$(function() {
  let timerKill = null;
  timerKill = setTimeout(() => {
    urlSPliter().then(({ success, familyId }) => {
      if (success) {
        getClientInfo(familyId);
        getExistingInsurances(familyId);
        getPreviousInsurances(familyId);
        getInProgressInsurances(familyId);
      }
    });
    clearTimeout(timerKill);
  }, 2500);
});

$(window).bind('hashchange', function() {
  urlSPliter().then(({ success, familyId }) => {
    if (success) {
      getClientInfo(familyId);
      getExistingInsurances(familyId);
      getPreviousInsurances(familyId);
      getInProgressInsurances(familyId);
    }
  });
});
