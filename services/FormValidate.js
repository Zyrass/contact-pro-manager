exports.checkValidate = (request) => {
  let i = 0;
  const form = {
    errorMessage: [],
    data: {
      lastName: request.lastName ?? "",
      firstName: request.firstName ?? "",
      company: request.company ?? "",
      address: request.address ?? "",
      phone: request.phone ?? "",
      email: request.email ?? "",
      sector: request.sector ?? "",
    },
  };

  if (form.data.lastName == "") {
    form.errorMessage[i] = 'Le champ "nom" ne peut-être vide';
    i++;
  }
  if (form.data.firstName == "") {
    form.errorMessage[i] = 'Le champ "prénom" ne peut-être vide';
    i++;
  }
  if (form.data.company == "") {
    form.errorMessage[i] = 'Le champ "companie" ne peut-être vide';
    i++;
  }
  if (form.data.address == "") {
    form.errorMessage[i] = 'Le champ "adresse" ne peut-être vide';
    i++;
  }
  if (form.data.phone == "") {
    form.errorMessage[i] = 'Le champ "phone" ne peut-être vide';
    i++;
  }
  if (form.data.email == "") {
    form.errorMessage[i] = 'Le champ "email" ne peut-être vide';
    i++;
  }
  if (form.data.sector == "") {
    form.errorMessage[i] = 'Le champ "sector" ne peut-être vide';
    i++;
  }

  if (form.errorMessage.length == 0) {
    return form.data;
  } else {
    return form.errorMessage;
  }
};
