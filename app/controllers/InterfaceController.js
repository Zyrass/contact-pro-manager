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
  res.status(200).render("edit-item");
};

const postUpdate = (req, res) => {
  res.status(200).render("edit-item");
};

const putUpdate = (req, res) => {
  res.redirect("/");
};

const getDelete = (req, res) => {
  ContactModel.findById(req.params.id)
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
  putUpdate,
};
