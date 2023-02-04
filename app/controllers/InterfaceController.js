const ContactModel = require("../models/ContactModel");
const { checkValidate } = require("../../services/FormValidate");

const getCreate = (req, res) => {
  res.status(200).render("add-item", {
    errors: [],
  });
};

const postCreate = (req, res) => {
  ContactModel.findById(req.params.id).then(() => {
    const form = checkValidate(req.body);
    if (form.length > 0) {
      console.log("Il y a des erreurs");
      res.status(400).render("add-item", {
        errors: form,
      });
    } else {
      // console.log(form);
      const newContact = new ContactModel(req.body);
      newContact.save().then(() => res.redirect("/"));
    }
  });
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
        errors: [],
        data: {
          contact: document,
        },
      });
    })
    .catch((err) => console.log(err.stack));
};

const postUpdate = (req, res) => {
  ContactModel.findById(req.params.id).then((document) => {
    const form = checkValidate(req.body);
    // console.log(form);

    if (form.length > 0) {
      console.log("Il y a des erreurs");
      res.status(400).render("edit-item", {
        errors: form,
        data: {
          contact: document,
        },
      });
    } else {
      ContactModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
        .exec()
        .then((document) => {
          // console.log(document);
          res.redirect("/");
        })
        .catch((err) => console.log(err.stack));
    }
  });
};

const getDelete = (req, res) => {
  ContactModel.findByIdAndRemove(req.params.id)
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
