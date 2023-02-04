const router = require("express").Router();
const myController = require("../app/controllers/InterfaceController");

router.route("/").get(myController.getRead);

router
  .route("/contact/new")
  .get(myController.getCreate)
  .post(myController.postCreate);

router
  .route("/contact/edit/:id")
  .get(myController.getUpdate)
  .post(myController.postUpdate);

router.route("/contact/delete/:id").get(myController.getDelete);

router.route("/contact/show/:id").get(myController.getOneContact);

router.route(["/contact", "/contact/show", "/contact/edit", "/contact/delete"]).get(myController.getRedirect);

module.exports = router;
