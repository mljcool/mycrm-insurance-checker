const getStoragesInsurances = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(
      ['insurancExisting', 'insurancPrevious', 'insurancInProgress'],
      (results) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(results);
        }
      },
    );
  });
};
