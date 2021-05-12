const triggerResyncOn = (client) => {
  const { fname, lname } = client;

  const opt = {
    type: 'basic',
    title: 'Insuranc Checker Re-fetching ',
    message: 'client data ' + fname + ' ' + lname,
    priority: 1,
    iconUrl: './icons/icon48.png',
  };
  chrome.notifications.create('ON', opt, (id) => {
    clearStatusNotifications();
  });
};

const clearStatusNotifications = () => {
  let mySetTimeout = null;
  mySetTimeout = setTimeout(() => {
    chrome.notifications.clear('ON', (status) => {});
    clearTimeout(mySetTimeout);
  }, 3000);
};