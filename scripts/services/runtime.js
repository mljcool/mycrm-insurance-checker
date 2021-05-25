const urlSPliter = () => {
   return new Promise((resolve, reject) => {
      const url = window.location.href;
      const splitURL = url.split('/');
      const isInContactPage =
         splitURL.includes('contacts') && splitURL.length >= 5;
      if (!!splitURL.length && isInContactPage) {
         resolve({
            success: true,
            familyId: splitURL[6],
         });
      } else {
         resolve({
            success: false,
            familyId: 0,
         });
      }
   });
};

const urlClientMyCRM = (familyId = '') => {
   return 'contacts/ClientInformGet?familyId=' + familyId + '&clientId=null';
};

/**
 * extension scraping APIS
 * code block
 */

const baseIpAddress = '3.24.21.76';
const baseURL = 'http://' + baseIpAddress + '/';

const setupSettingSearch = (payload = []) => {
   return $.ajax({
      url: baseURL + 'insurer/search-clients',
      method: 'GET',
      timeout: 0,
      headers: {
         'Content-Type': 'application/json',
      },
      data: JSON.stringify(payload),
   });
};

const getAllConnectedProviders = (browserId = '') => {
   return $.ajax({
      url: baseURL + '/setup/get-credential?browserId=' + browserId,
      method: 'GET',
      timeout: 0,
      headers: {
         'Content-Type': 'application/json',
      },
   });
};
