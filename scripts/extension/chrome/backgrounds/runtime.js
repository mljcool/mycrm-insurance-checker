/** @format */
const startWebScraping = (messageType = '') => {
   createRunningNotifications(messageType);
   setDefaultsValues();
   getStorages().then((resp) => {
      setPromisesConnections(resp);
   });
};

chrome.runtime.onMessage.addListener((data) => {
   if (data.type === 'scraping') {
      startWebScraping('Running');
   }
   if (data.type === 're-scraping') {
      startWebScraping('Re-running');
   }
});
