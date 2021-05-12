const getFormattedDate = (date) => {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return day + '/' + month + '/' + year;
};

const setSyncID = () => {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const safeKeys = (data = {}) => {
  return (keys) => {
    const exist = (data || {}).hasOwnProperty(keys);
    return exist ? data[keys] : null;
  };
};

const setInitials = (fname = '', lname = '') => {
  const strsFormat = (str) => (str || '').charAt(0).toUpperCase();
  const setNames = strsFormat(fname) + '' + strsFormat(lname);
  return setNames;
};

const setWordForIcons = (str = '') => {
  const setAll = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      setAll.push(str.charAt(i));
    }
  }

  return setAll
    .join('')
    .replace(/\s/g, '')
    .toLowerCase();
};

const isLimitPolicy = (policyNumber = '') => {
  let policy = '-';
  if (!!policyNumber) {
    policy = (policyNumber || '').substr(0, 25) + '...';
  }
  return policy;
};
