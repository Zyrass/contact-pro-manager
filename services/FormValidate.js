/**
 * Permet de valider les champs du formulaire
 * @param {*} request
 * @returns
 */
exports.checkValidate = (request) => {
  // Indice pour mon tableau d'erreur
  let i = 0;

  // Objet regroupant toutes les informations nécessaire au bon fonctionnement de l'application
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

  // Erreur pour le Nom
  if (form.data.lastName == "") {
    form.errorMessage[i] = 'Le champ "nom" ne peut-être vide';
    i++;
  }

  // Erreur pour le Prénom
  if (form.data.firstName == "") {
    form.errorMessage[i] = 'Le champ "prénom" ne peut-être vide';
    i++;
  }

  // Erreur pour la Société
  if (form.data.company == "") {
    form.errorMessage[i] = 'Le champ "société" ne peut-être vide';
    i++;
  }

  // Erreur pour l'Adresse
  if (form.data.address == "") {
    form.errorMessage[i] = 'Le champ "adresse" ne peut-être vide';
    i++;
  }

  // Erreur pour le Téléphone
  if (form.data.phone == "") {
    form.errorMessage[i] = 'Le champ "phone" ne peut-être vide';
    i++;
  }

  // Erreur pour l'Email
  if (form.data.email == "") {
    form.errorMessage[i] = 'Le champ "email" ne peut-être vide';
    i++;
  }

  // Erreur pour le Secteur
  if (form.data.sector == "") {
    form.errorMessage[i] = 'Le champ "sector" ne peut-être vide';
    i++;
  }

  /**
   * Si il n'y a aucune erreur alors on retournera directement le sous objet "data" contenu dans l'objet form.
   * Auquel cas, si il y a une erreur alors on retournera le tableau d'erreur.
   */
  if (form.errorMessage.length == 0) {
    return form.data;
  } else {
    return form.errorMessage;
  }
};
