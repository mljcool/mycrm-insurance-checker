/** @format */

const stopRunning = () => {
   setTimeout(() => {
      chrome.runtime.sendMessage('', {
         type: 'stop',
      });
   }, 1000);
};

const startWebScraping = (messageType = '') => {
   createRunningNotifications(messageType);
   setDefaultsValues();
   getStorages().then((resp) => {
      setPromisesConnections(resp);
   });
};

const setPromisesConnections = (resp) => {
   const { success, results } = resp;
   if (success) {
      const { chromeId, clientInfo } = results;
      getProviderConnections(chromeId).then(({ data, succeeded }) => {
         console.log('connections', data);

         if (succeeded) {
            setEachClients(data, clientInfo, chromeId);
         }
      });
   }
};

const getEachScraping = (allSet = []) => {
   let results = [];
   let pushErrors = [];
   if (!!allSet.length) {
      allSet.forEach((clientsSet) => {
         startScraping(clientsSet).then((scrape) => {
            if (scrape.succeeded && !!scrape.data.length) {
               results.push(scrape.data[0]);
               setStorage({
                  dataScrapted: results,
               });
            } else {
               pushErrors.push(scrape);
               setStorage({
                  errorStatus: {
                     hasError: true,
                     dataError: JSON.stringify(pushErrors),
                  },
               });
            }
            stopRunning();
         });
      });
   }
};

const setEachClients = (connections = [], clients = [], chromeId) => {
   const allSet = [];
   connections.forEach((provider, index) => {
      const newData = clients.map((client) => {
         return {
            Birthday: client.birthday,
            FirstName: client.firstName,
            LastName: client.lastName,
            BrowserId: chromeId,
            InsurerName: (provider.insurerName || '').toLowerCase(),
         };
      });
      allSet.push(newData);
      if (index === connections.length - 1) {
         getEachScraping(allSet);
      }
   });
};
