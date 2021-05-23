/** @format */

$(function() {
   setTimeout(() => {
      urlSPliter().then(({ success, familyId }) => {
         if (success) {
            getClientInfo(familyId);
            getAdviserInfo();
         }
      });
   }, 2500);
   developer_mode();
});

$(window).bind('hashchange', function() {
   //  testForConsole();
   // urlSPliter().then(({ success, familyId }) => {
   //   if (success) {
   //     getClientInfo(familyId);
   //     getAdviserInfo();
   //   }
   // });
});
