const triggerResyncOn = (client) => {
   const { fullName } = client;

   const opt = {
      type: 'basic',
      title: 'Insuranc Checker Re-fetching ',
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
      clearTimeout(mySetTimeout);
   }, 3000);
};
