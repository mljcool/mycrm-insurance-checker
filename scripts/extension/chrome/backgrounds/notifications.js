/** @format */

const createErrorNotifications = (message) => {
   const opt = {
      type: 'basic',
      title: 'Insuranc Checker ',
      message: 'running some issues with ' + message,
      priority: 1,
      iconUrl: './icons/icon48.png',
   };
   chrome.notifications.create('error', opt, (id) => {
      clearErrorNotifications();
   });
};

const clearErrorNotifications = () => {
   let mySetTimeout = null;
   mySetTimeout = setTimeout(() => {
      chrome.notifications.clear('ON', (status) => {});
      clearTimeout(mySetTimeout);
   }, 3000);
};
