const router = require("express").Router();
const myApi = require("../app/controllers/ApiController");

router.route("/").get(myApi.getReadJSON);

router
  .route("/contact/new")
  //.get(myApi.getCreate)
  .post(myApi.postCreateJSON);

router.route("/contact/edit/:id").put(myApi.putUpdateJSON);

router.route("/contact/delete/:id").delete(myApi.deleteJSON);

router.route("/contact/show/:id").get(myApi.getOneContactJSON);

router
  .route(["/contact", "/contact/show", "/contact/edit", "/contact/delete"])
  .get(myApi.getRedirect);

module.exports = router;
