// SERVICES FOR API
// http://54.252.153.150/swagger/index.html

const baseIpAddress = '3.24.21.76';
const baseURL = 'http://' + baseIpAddress + '/';

const postConnectToProvider = ({ $http, details }) => {
   const urlChecker = baseURL + 'setup/set-credential';
   return $http({
      method: 'POST',
      url: urlChecker,
      data: JSON.stringify(details),
   });
};

const getConnectToProvider = ({ $http, browserId }) => {
   const urlChecker = baseURL + 'setup/get-credential';
   return $http.get(urlChecker, {
      params: { browserId },
   });
};

const encodeURI = (queries = {}) => {
   const { firstName, lastName, birthday, browserId, insurerName } = queries;

   return {
      firstName: encodeURIComponent(firstName),
      lastName: encodeURIComponent(lastName),
      birthday: encodeURIComponent(birthday.replaceAll('/', '-')),
      browserId: encodeURIComponent(browserId),
      insurerName: encodeURIComponent(insurerName),
   };
};

const getCompareToProvider = ({ $http, queries }) => {
   const urlChecker = baseURL + 'insurer/search-client';
   return $http.get(urlChecker, {
      params: encodeURI(queries),
   });
};

const deleteCredentials = ({ $http, details }) => {
   const urlChecker = baseURL + 'setup/delete-credential';

   return $http({
      method: 'POST',
      url: urlChecker,
      data: JSON.stringify(details),
   });
};
