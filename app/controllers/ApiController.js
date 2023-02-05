const ContactModel = require("../models/ContactModel");
const { checkValidate } = require("../../services/FormValidate");

// OK
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

// OK
const getReadJSON = (req, res) => {
  ContactModel.find()
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch((err) => console.log(err.stack));
};

// OK
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

// OK
const deleteJSON = (req, res) => {
  ContactModel.findByIdAndRemove(req.params.id)
    .then((document) => {
      console.log(document);
      res.redirect("/api/");
    })
    .catch((err) => console.log(err.stack));
};

// OK
const getOneContactJSON = (req, res) => {
  ContactModel.findById(req.params.id)
    .then((document) => {
      res.status(200).json(document);
    })
    .catch((err) => console.log(err.stack));
};

// OK
const getRedirect = (req, res) => {
  res.redirect("/");
};

module.exports = {
  postCreateJSON,
  getReadJSON,
  putUpdateJSON,
  deleteJSON,
  getOneContactJSON,
  getRedirect,
};
