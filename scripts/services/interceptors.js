$(function() {
  let timerKill = null;
  timerKill = setTimeout(() => {
    urlSPliter().then((response) => {
      console.log('requestURL', response);
    });
    clearTimeout(timerKill);
  }, 2500);
});

$(window).bind('hashchange', function() {
  //code
  urlSPliter().then((response) => {
    console.log('requestURL', response);
  });
});
