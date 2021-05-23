/** @format */

chrome.runtime.onMessage.addListener((data) => {
   if (data.type === 'scraping') {
      createRunningNotifications('Running');
      setDefaultsValues();
      getStorages().then((resp) => {
         setPromisesConnections(resp);
      });
   }
   if (data.type === 're-scraping') {
      createRunningNotifications('Re-running');
      setDefaultsValues();
      getStorages().then((resp) => {
         setPromisesConnections(resp);
      });
   }
});
