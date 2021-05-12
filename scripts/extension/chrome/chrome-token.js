const setChromeToken = () => {
  var randomPool = new Uint8Array(32);
  crypto.getRandomValues(randomPool);
  var hex = '';
  for (var i = 0; i < randomPool.length; ++i) {
    hex += randomPool[i].toString(16);
  }
  return hex;
};

const setChromeIdentity = () => {
  const chromeId = setChromeToken();
  chrome.storage.local.get('chromeId', (items) => {
    if (!items.chromeId) {
      chrome.storage.local.set({ chromeId: chromeId }, function() {
        console.log('Value is set to ' + chromeId);
      });
    }
  });
};
