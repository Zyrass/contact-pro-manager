/**
 * =======================================================================
 * Import du Modèle ContactModel (Schema)
 * =======================================================================
 */
const ContactModel = require("../models/ContactModel");

/**
 * =======================================================================
 * Import du Service (function) pour vérifier l'intégrité du formulaire
 * =======================================================================
 */
const { checkValidate } = require("../../services/FormValidate");

/**
 * =======================================================================
 * Redirection si l'url ne correspon pas
 * =======================================================================
 */
const getRedirect = (req, res) => {
  res.redirect("/");
};

/**
 * =======================================================================
 * Affichage de tous les contacts avec le protocole GET
 * =======================================================================
 */
const getReadJSON = (req, res) => {
  ContactModel.find()
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch((err) => console.log(err.stack));
};

/**
 * =======================================================================
 * Affichage d'un seul contact via son ID en GET
 * =======================================================================
 */
const getReadOneJSON = (req, res) => {
  ContactModel.findById(req.params.id)
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => console.log(err.stack));
};

/**
 * =======================================================================
 * Création d'un contact avec le protocole POST
 * =======================================================================
 */
const postCreateJSON = (req, res) => {
  const form = checkValidate(req.body);
  if (form.length > 0) {
    // console.log("Il y a des erreurs");
    console.log(form);
    res.status(400).json(form);
  } else {
    // console.log(form);
    const newContact = new ContactModel(req.body);
    newContact.save().then(() => res.redirect("/api/"));
  }
};

/**
 * =======================================================================
 * Mise à jour d'un contact via son ID avec le protocole PUT
 * =======================================================================
 */
const putUpdateJSON = (req, res) => {
  ContactModel.findById(req.params.id).then((document) => {
    const form = checkValidate(req.body);
    // console.log(form);
    if (form.length > 0) {
      // console.log("Il y a des erreurs");
      res.status(400).json(form);
    } else {
      ContactModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
        .exec()
        .then((document) => {
          console.log({
            "Document bien mis à jour": document,
          });
          res.redirect("/api/");
        })
        .catch((err) => console.log(err.stack));
    }
  });
};

/**
 * =======================================================================
 * Suppression d'un contact via son ID avec le protocole DELETE
 * =======================================================================
 */
const deleteJSON = (req, res) => {
  ContactModel.findByIdAndRemove(req.params.id)
    .then((document) => {
      console.log(document);
      res.redirect("/api/");
    })
    .catch((err) => console.log(err.stack));
};

/**
 * =======================================================================
 * Export d'un objet pour chaque controller vers le fichier:
 * api.routes.js
 * -----------------------------------------------------------------------
 * Au cas où, l'exemple en commentaire est strictement identique et donc
 * via ES6, si un KEY comporte le même nom qu'une VALUE alors il est
 * possible de la combiner soit
 *
 *  module.exports = {
 *   getRead: getRead
 *   getRead,
 * };
 *
 * Même si ce code provoque une erreur vue que la KEY getRead existe déjà,
 * tu as ici une bien meilleur compréhension de ce qu'il se passe.
 * =======================================================================
 */
module.exports = {
  // redirection si route invalide
  getRedirect,
  // cRud
  getReadJSON,
  getReadOneJSON,
  // Crud
  postCreateJSON,
  // crUd
  putUpdateJSON,
  // cruD
  deleteJSON,
};
