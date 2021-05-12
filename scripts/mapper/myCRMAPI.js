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

const mapClientsInfo = (clientList = []) => {
  const clientMapper = (data = {}) => {
    const setKeys = safeKeys(data);
    return {
      personId: parseInt(setKeys('PersonId')),
      lastName: setKeys('LastName'),
      fullName: setKeys('FullName'),
      firstName: setKeys('FirstName'),
      middleName: setKeys('MiddleName'),
      legalName: setKeys('LegalName'),
      preferredName: setKeys('PreferredName'),
      isPrimary: setKeys('isPrimary'),
      gender: setKeys('Gender'),
      initialName: setInitials(setKeys('FirstName'), setKeys('LastName')),
      dateOfBirth: !setKeys('DateOfBirth')
        ? null
        : getFormattedDate(new Date(setKeys('DateOfBirth'))),
      email:
        setKeys('Email') !== null
          ? safeKeys(setKeys('Email')[0])('EmailAddress')
          : null,
    };
  };

  return clientList.map(clientMapper);
};

const mapClientsInsurance = (insuranceList = []) => {
  const benefitsMapper = (data) => {
    const setKeys = safeKeys(data);
    return {
      id: setKeys('ID'),
      familyClientID: setKeys('FamilyClientID'),
      clientID: setKeys('ClientID'),
      benefitName: setKeys('BenefitName'),
      coverAmount: setKeys('CoverAmount'),
      firstName: setKeys('FirstName'),
      lastName: setKeys('LastName'),
      benefitTotalPremium: setKeys('BenefitTotalPremium'),
      isSync: false,
      initialName: setInitials(setKeys('FirstName'), setKeys('LastName')),
    };
  };

  const clientMapper = (data = {}) => {
    const setKeys = safeKeys(data);
    return {
      providerID: setKeys('ProviderID'),
      policyNumber: setKeys('PolicyNumber'),
      policyNumberLimited:
        (setKeys('PolicyNumber') || '').substr(0, 30) + '...',
      providerName: setKeys('ProviderName'),
      statusName: setKeys('StatusName'),
      isApplication: setKeys('IsApplication'),
      benefitDetails: setKeys('BenefitDetails').map(benefitsMapper),
      isSync: false,
      isConnected: false,
      message:
        'Seems your ' + setKeys('ProviderName') + ' account is not connected.',
      syncID: setSyncID(),
    };
  };

  return insuranceList.map(clientMapper);
};

const mapAdviserInfo = (adviserData = {}) => {
  const setKeys = safeKeys(adviserData);
  return {
    firstName: setKeys('FirstName'),
    lastName: setKeys('LastName'),
    preferredFullName: setKeys('PreferredFullName'),
    accessType: setKeys('AccessType'),
    email: setKeys('Email'),
    clientId: setKeys('ClientId'),
  };
};
