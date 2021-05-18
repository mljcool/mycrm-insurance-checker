const getStoragesToMap = () => {
   return new Promise((resolve, reject) => {
      chrome.storage.local.get(
         [
            'insuranceExisting',
            'insurancePrevious',
            'insuranceInProgress',
            'clientInfo',
            'adviserData',
            'chromeId',
            'errorStatus',
            'result_from_scrape',
         ],
         (results) => {
            if (chrome.runtime.lastError) {
               reject(chrome.runtime.lastError);
            } else {
               resolve({
                  success: true,
                  results,
               });
            }
         },
      );
   });
};
