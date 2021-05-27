/** @format */

const triggerResyncOn = (client) => {
   const { fullName } = client;

   const opt = {
      type: 'basic',
      title: 'Insurance Checker Re-fetching ',
      message: 'client data ' + fullName,
      priority: 1,
      iconUrl: './icons/icon48.png',
   };
   chrome.notifications.create('ON', opt, (id) => {
      clearStatusNotifications();
   });

   chrome.runtime.sendMessage('', {
      type: 'alert',
      notificationId: 'ON',
   });
};

const clearStatusNotifications = () => {
   let mySetTimeout = null;
   mySetTimeout = setTimeout(() => {
      chrome.notifications.clear('ON', (status) => {});
      chrome.notifications.clear('SYNC_STATUS', (status) => {});
      clearTimeout(mySetTimeout);
   }, 3000);
};

const autoSyncNotification = (status) => {
   const message = status ? 'ON' : 'OFF';
   const opt = {
      type: 'basic',
      title: 'Insurance Checker',
      message: 'Auto check on open is ' + message,
      priority: 1,
      iconUrl: './icons/icon48.png',
   };
   chrome.notifications.create('SYNC_STATUS', opt, (id) => {
      clearStatusNotifications();
   });
};
