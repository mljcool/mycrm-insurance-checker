// const baseURL = 'https://api.loanmarket.com.au/; prodURL
// const baseURL = 'https://api.nzfsg.co.nz/'; prodURL
// const baseURL = 'https://api.sit.mycrm.finance/'; SIT URL
const baseURL = 'https://api.nzfsg.co.nz/';

const crmRequest = (urlStr) => {
  const mytime = JSON.parse(localStorage.getItem('mycrm-tokens'));
  const settings = {
    url: baseURL + urlStr,
    method: 'GET',
    timeout: 0,
    headers: {
      Authorization: 'Bearer ' + ((mytime || {}).accessToken || {}).value,
    },
  };
  return $.ajax(settings);
};

const getClientInfo = (familyId) => {
  const url =
    'contacts/ClientInformGet?familyId=' + familyId + '&clientId=null';

  crmRequest(url).done((response) => {
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
