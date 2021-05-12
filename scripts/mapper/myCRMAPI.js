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
      reSyncData: false,
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
      initialName: setInitials(setKeys('FirstName'), setKeys('LastName')),
      isSyncing: false,
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
      message:
        'Seems your ' + setKeys('ProviderName') + ' account is not connected.',
      syncID: setSyncID(),
      isSyncing: false,
      isConnected: false,
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
