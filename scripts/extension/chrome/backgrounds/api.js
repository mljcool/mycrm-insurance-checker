/** @format */

const baseIpAddressScrape = '3.24.21.76';
const baseURLScrape = 'http://' + baseIpAddressScrape + '/';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const getProviderConnections = (browserId = '') => {
   return fetch(baseURLScrape + 'setup/get-credential?browserId=' + browserId, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
   }).then((response) => response.json());
};

const startScraping = (dataParams = []) => {
   return fetch(baseURLScrape + 'insurer/search-clients', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(dataParams),
      redirect: 'follow',
   }).then((response) => response.json());
};
