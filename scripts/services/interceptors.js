/** @format */

$(function() {
   setTimeout(() => {
      interceptMyCRM();
   }, 2500);
   developer_mode();
});

$(window).bind('hashchange', function() {
   interceptMyCRM();
});
