const baseIpAddressScrape = '3.24.21.76';
const baseURLScrape = 'http://' + baseIpAddressScrape + '/';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const getAllConnections = (browserId = '') => {
   return fetch(baseURLScrape + 'setup/get-credential?browserId=' + browserId, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
   }).then((response) => response.json());
};

const startScraping = (data = []) => {
   var raw = JSON.stringify(data);

   var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
   };

   return fetch(baseURLScrape + 'insurer/search-clients', requestOptions).then(
      (response) => response.json(),
   );
};

const getStoragesToMap = () => {
   return new Promise((resolve, reject) => {
      chrome.storage.local.get(['clientInfo'], (results) => {
         if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
         } else {
            resolve({
               success: true,
               results,
            });
         }
      });
   });
};

const settter = (connnections, clients, chromeId) => {
   return new Promise((resolve, reject) => {
      Promise.all([connnections(chromeId), clients()]).then((response) => {
         resolve(response);
      }, reject);
   });
};

const doneSetting = (connections = [], clients = {}, chromeId) => {
   const allSet = [];
   return new Promise((resolve) => {
      connections.forEach((provider, index) => {
         clients.results.clientInfo.forEach((client) => {
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
            resolve(allSet);
         }
      });
   });
};

const setStorage = (props = {}) => {
   chrome.storage.local.set(props);
};

chrome.runtime.onMessage.addListener((data) => {
   if (data.type === 'notification') {
      chrome.notifications.create(data.notificationId, data.options);
   }

   if (data.type === 'alert') {
      chrome.storage.local.get(['chromeId'], ({ chromeId }) => {
         if (!!chromeId) {
            setStorage({
               errorStatus: null,
            });
            settter(getAllConnections, getStoragesToMap, chromeId).then(
               ([connections, clients]) => {
                  if (!!connections.length && clients.success) {
                     doneSetting(connections, clients, chromeId).then(
                        (_connection_response) => {
                           console.log('response', _connection_response);
                           if (_connection_response.length) {
                              let pushErrors = [];
                              let clientInsurances = [];
                              _connection_response.forEach((clientsSet) => {
                                 startScraping([clientsSet]).then((_scrape) => {
                                    if (
                                       _scrape.StatusCode === 500 &&
                                       !!_scrape.StatusCode
                                    ) {
                                       pushErrors.push(_scrape);
                                       setStorage({
                                          errorStatus: {
                                             hasError: true,
                                             dataError: JSON.stringify(
                                                pushErrors,
                                             ),
                                          },
                                       });
                                    } else {
                                       clientInsurances.push(_scrape[0]);
                                       setStorage({
                                          result_from_scrape: clientInsurances,
                                       });

                                       console.log(
                                          'results from _scrape',
                                          _scrape,
                                       );
                                    }
                                 });
                              });
                           }
                        },
                     );
                  }
               },
            );
         }
      });
   }
});
