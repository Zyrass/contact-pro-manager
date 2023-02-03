const { findByIdAndUpdate } = require("../models/ContactModel");
const ContactModel = require("../models/ContactModel");

const getCreate = (req, res) => {
  res.status(200).render("add-item");
};

const postCreate = (req, res) => {
  const newContact = new ContactModel(req.body);
  console.log(newContact);
  newContact.save().then(() => res.redirect("/"));
};

const getRead = (req, res) => {
  ContactModel.find()
    .then((documents) => {
      res.status(200).render("home", {
        data: {
          contacts: documents,
        },
      });
    })
    .catch((err) => console.log(err.stack));
};

const getUpdate = (req, res) => {
  ContactModel.findById(req.params.id)
    .then((document) => {
      console.log(document);
      res.status(200).render("edit-item", {
        data: {
          contact: document,
        },
      });
    })
    .catch((err) => console.log(err.stack));
};

const postUpdate = (req, res) => {
  ContactModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .exec()
    .then((document) => {
      console.log(document);
      res.redirect("/");
    })
    .catch((err) => console.log(err.stack));
};

const getDelete = (req, res) => {
  ContactModel.findOneAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err.stack));
};

module.exports = {
  getCreate,
  getRead,
  getUpdate,
  getDelete,
  postCreate,
  postUpdate,
};
