/** @format */

// const crmBaseURL = 'https://api.loanmarket.com.au/; prodURL
// const crmBaseURL = 'https://api.nzfsg.co.nz/'; prodURL
// const crmBaseURL = 'https://api.sit.mycrm.finance/'; SIT URL
const crmBaseURL = 'https://api.nzfsg.co.nz/';

const crmRequest = (urlStr) => {
   const mytime = JSON.parse(localStorage.getItem('mycrm-tokens'));
   const settings = {
      url: crmBaseURL + urlStr,
      method: 'GET',
      timeout: 0,
      headers: {
         Authorization: 'Bearer ' + ((mytime || {}).accessToken || {}).value,
      },
   };
   return $.ajax(settings);
};
const setStorage = (props = {}) => {
   chrome.storage.local.set(props);
};

const clearStrage = () => {
   chrome.storage.local.set({
      dataScrapted: [],
   });
   chrome.storage.local.set({
      errorStatus: {
         hasError: false,
         dataError: [],
      },
   });
};

const getClientInfo = (familyId) => {
   crmRequest(urlClientMyCRM(familyId)).done((response) => {
      if (!!response.length) {
         const clientInfo = mapClientsInfo(response.sort().reverse());
         clearStrage();
         setStorage({
            clientInfo,
         });

         console.log('getClientInfo API', clientInfo);
      }
   });
};

const getAdviserInfo = () => {
   crmRequest('GetUserInfo').done((response) => {
      const adviserData = mapAdviserInfo(response);
      setStorage({
         adviserData,
      });
   });
};

const interceptMyCRM = () => {
   urlSPliter().then(({ success, familyId }) => {
      if (success) {
         getClientInfo(familyId);
         getAdviserInfo();
      }
   });
};

const developer_mode = () => {
   chrome.runtime.sendMessage('', {
      type: 'scraping',
   });
};
