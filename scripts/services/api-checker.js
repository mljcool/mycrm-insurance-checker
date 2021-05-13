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

const getClientInfo = (familyId) => {
  crmRequest(urlClientMyCRM(familyId)).done((response) => {
    if (!!response.length) {
      const clientInfo = mapClientsInfo(response.sort().reverse());
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
