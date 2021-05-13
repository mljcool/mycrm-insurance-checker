$(function() {
  setTimeout(() => {
    urlSPliter().then(({ success, familyId }) => {
      if (success) {
        getClientInfo(familyId);
        getAdviserInfo();
      }
    });
  }, 2500);
});

$(window).bind('hashchange', function() {
  urlSPliter().then(({ success, familyId }) => {
    if (success) {
      getClientInfo(familyId);
      getAdviserInfo();
    }
  });
});
