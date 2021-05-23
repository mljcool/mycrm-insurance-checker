/** @format */

const notificationFormat = (message) => {
   return {
      type: 'basic',
      title: 'Insurance Checker ',
      message,
      priority: 1,
      iconUrl: './icons/icon48.png',
   };
};

const createErrorNotifications = (msgParam) => {
   const message = 'running some issues with ' + msgParam;
   chrome.notifications.create('error', notificationFormat(message), (id) => {
      clearNotifications();
   });
};

const clearNotifications = () => {
   let mySetTimeout = null;
   mySetTimeout = setTimeout(() => {
      chrome.notifications.clear('error', (status) => {});
      chrome.notifications.clear('running', (status) => {});
      clearTimeout(mySetTimeout);
   }, 3000);
};

const createRunningNotifications = (msgParam) => {
   const message = msgParam;
   chrome.notifications.create('running', notificationFormat(message), (id) => {
      clearNotifications();
   });
};
