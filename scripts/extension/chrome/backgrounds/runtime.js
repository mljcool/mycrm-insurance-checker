/** @format */

chrome.runtime.onMessage.addListener((data) => {
   if (data.type === 'scraping') {
      setDefaultsValues();
      getStorages().then((resp) => {
         setPromisesConnections(resp);
      });
   }
});
