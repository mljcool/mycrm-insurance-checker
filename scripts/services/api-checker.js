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

const crmRequest = (urlStr) => {
  const mytime = JSON.parse(localStorage.getItem('mycrm-tokens'));
  const settings = {
    url: urlStr,
    method: 'GET',
    timeout: 0,
    headers: {
      Authorization: 'Bearer ' + ((mytime || {}).accessToken || {}).value,
    },
  };
  return $.ajax(settings);
};
