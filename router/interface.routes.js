/**
 * =======================================================================
 * Dépendances ou module
 * =======================================================================
 */
const router = require("express").Router();

/**
 * =======================================================================
 * Import du fichier InterfaceController
 * =======================================================================
 */
const myController = require("../app/controllers/InterfaceController");

/**
 * =======================================================================
 * Routing utilisant uniquement le protocole GET
 * =======================================================================
 */
router.get(
  ["/contact", "/contact/show", "/contact/edit", "/contact/delete"],
  myController.getRedirect
);
router.get("/", myController.getRead);
router.get("/contact/show/:id", myController.getReadOne);
router.get("/contact/delete/:id", myController.getDelete);

/**
 * =======================================================================
 * Routing utilisant plusieurs protocole différents
 * =======================================================================
 */
router
  .route("/contact/new")
  .get(myController.getCreate)
  .post(myController.postCreate);

router
  .route("/contact/edit/:id")
  .get(myController.getUpdate)
  .post(myController.postUpdate);

/**
 * =======================================================================
 * Exportation du router pour le réutiller dans le fichier app.js
 * =======================================================================
 */
module.exports = router;
