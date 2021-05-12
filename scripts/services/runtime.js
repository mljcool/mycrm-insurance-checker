const urlSPliter = () => {
  return new Promise((resolve, reject) => {
    const url = window.location.href;
    const splitURL = url.split('/');
    const isInContactPage = !!splitURL.find((url) => url.includes('#'));
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

const setStorage = (props = {}) => {
  chrome.storage.local.set(props);
};
