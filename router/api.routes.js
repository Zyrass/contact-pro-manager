/**
 * =======================================================================
 * Dépendances ou module
 * =======================================================================
 */
const router = require("express").Router();

/**
 * =======================================================================
 * Import du fichier ApiController
 * =======================================================================
 */
const myApi = require("../app/controllers/ApiController");

/**
 * =======================================================================
 * Routing utilisant uniquement le protocole GET
 * =======================================================================
 */
router.get(
  ["/contact", "/contact/show", "/contact/edit", "/contact/delete"],
  myApi.getRedirect
);
router.get("/", myApi.getReadJSON);
router.get("/contact/show/:id", myApi.getReadOneJSON);

/**
 * =======================================================================
 * Routing utilisant uniquement le protocole PUT
 * =======================================================================
 */
router.put("/contact/edit/:id", myApi.putUpdateJSON);

/**
 * =======================================================================
 * Routing utilisant uniquement le protocole DELETE
 * =======================================================================
 */
router.delete("/contact/delete/:id", myApi.deleteJSON);

/**
 * =======================================================================
 * Routing utilisant uniquement le protocole POST
 * =======================================================================
 */
router.post("/contact/new", myApi.postCreateJSON);

/**
 * =======================================================================
 * Exportation du router pour le réutiller dans le fichier app.js
 * =======================================================================
 */
module.exports = router;
