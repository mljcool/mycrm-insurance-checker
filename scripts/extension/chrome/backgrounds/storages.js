/** @format */

const setStorage = (props = {}) => {
   chrome.storage.local.set(props);
};

const setDefaultsValues = () => {
   setStorage({
      errorStatus: null,
   });
   setStorage({
      dataScrapted: [],
   });
};

const getStorages = () => {
   return new Promise((resolve, reject) => {
      chrome.storage.local.get(['clientInfo', 'chromeId'], (results) => {
         if (chrome.runtime.lastError) {
            createErrorNotifications('runtime get storages');
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
