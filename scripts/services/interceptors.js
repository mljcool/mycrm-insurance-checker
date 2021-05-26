/** @format */

$(function() {
   setTimeout(() => {
      interceptMyCRM();
   }, 2500);
   // developer_mode();
});

$(window).bind('hashchange', function() {
   setTimeout(() => {
      interceptMyCRM();
   }, 1000);
});
