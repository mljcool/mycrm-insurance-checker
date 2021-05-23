/** @format */
const stopRunning = () => {
   setTimeout(() => {
      chrome.runtime.sendMessage('', {
         type: 'stop',
      });
   }, 1000);
};

const setPromisesConnections = (resp) => {
   const { success, results } = resp;
   if (success) {
      const { chromeId, clientInfo } = results;
      getProviderConnections(chromeId).then((providers) => {
         setEachClients(providers, clientInfo, chromeId);
      });
   }
};

const getEachScraping = (allSet = []) => {
   let results = [];
   let pushErrors = [];
   if (!!allSet.length) {
      allSet.forEach((clientsSet) => {
         startScraping([clientsSet]).then((scrape) => {
            if (scrape.StatusCode !== 500 && !!scrape.length) {
               results.push(scrape[0]);
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
      clients.forEach((client) => {
         const newSet = {
            Birthday: client.birthday,
            FirstName: client.firstName,
            LastName: client.lastName,
            BrowserId: chromeId,
            InsurerName: (provider.insurerName || '').toLowerCase(),
         };
         allSet.push(newSet);
      });
      if (index === connections.length - 1) {
         getEachScraping(allSet);
      }
   });
};

// chrome.runtime.onMessage.addListener((data) => {
//    if (data.type === 'alert') {
//       chrome.storage.local.get(['chromeId'], ({ chromeId }) => {
//          if (!!chromeId) {
//             settter(getAllConnections, getStoragesToMap, chromeId).then(
//                ([connections, clients]) => {
//                   if (!!connections.length && clients.success) {
//                      doneSetting(connections, clients, chromeId).then(
//                         (_connection_response) => {
//                            console.log('response', _connection_response);
//                            if (_connection_response.length) {
//                               let pushErrors = [];
//                               let clientInsurances = [];
//                               _connection_response.forEach((clientsSet) => {
//                                  startScraping([clientsSet]).then((_scrape) => {
//                                     if (
//                                        _scrape.StatusCode === 500 &&
//                                        !!_scrape.StatusCode
//                                     ) {
//                                        pushErrors.push(_scrape);
//                                        setStorage({
//                                           errorStatus: {
//                                              hasError: true,
//                                              dataError: JSON.stringify(
//                                                 pushErrors,
//                                              ),
//                                           },
//                                        });
//                                     } else {
//                                        if (!!(_scrape[0] || {}).link) {
//                                           clientInsurances.push(_scrape[0]);
//                                           setStorage({
//                                              result_from_scrape: clientInsurances,
//                                           });
//                                        }

//                                        console.log(
//                                           'results from _scrape',
//                                           _scrape,
//                                        );
//                                     }
//                                  });
//                               });
//                            }
//                         },
//                      );
//                   }
//                },
//             );
//          }
//       });
//    }
// });
