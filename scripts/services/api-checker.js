const baseURL = 'https://api.sit.mycrm.finance/';

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

const insurancesURL = (familyId, status) => {
  const url =
    'insurance-application?familyId=' +
    familyId +
    '&isFireAndGeneral=false&policyNumber=&providerId=0&status=' +
    status;
  return url;
};

const getExistingInsurances = (familyId) => {
  const url = insurancesURL(familyId, 'Existing');
  crmRequest(url).done(({ Succeeded, Data }) => {
    if (Succeeded) {
      const insurancExisting = mapClientsInsurance(Data);
      setStorage({
        insurancExisting,
      });
      console.log('getExistingInsurances API', insurancExisting);
    }
  });
};

const getPreviousInsurances = (familyId) => {
  const url = insurancesURL(familyId, 'Previous');
  crmRequest(url).done(({ Succeeded, Data }) => {
    if (Succeeded) {
      const insurancePrevious = mapClientsInsurance(Data);
      setStorage({
        insurancePrevious,
      });
      console.log('getPreviousInsurances API', insurancePrevious);
    }
  });
};

const getInProgressInsurances = (familyId) => {
  const url = insurancesURL(familyId, 'In+Progress');
  crmRequest(url).done(({ Succeeded, Data }) => {
    if (Succeeded) {
      const insuranceInProgress = mapClientsInsurance(Data);
      setStorage({
        insuranceInProgress,
      });
      console.log('getInProgressInsurances API', insuranceInProgress);
    }
  });
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
