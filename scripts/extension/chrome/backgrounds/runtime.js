/** @format */

chrome.runtime.onMessage.addListener((data) => {
   if (data.type === 'scraping') {
      startWebScraping('Running');
   }
   if (data.type === 're-scraping') {
      startWebScraping('Re-running');
   }
});
