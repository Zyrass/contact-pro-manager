const router = require("express").Router();

router.route("/").get((req, res) => {
  res.status(200).render("home");
});

router
  .route("/contact/new")
  .get((req, res) => {
    res.status(200).render("add-item");
  })
  .post((req, res) => {
    res.redirect("/");
  });

router
  .route("/contact/edit/:id")
  .get((req, res) => {
    res.status(200).render("edit-item");
  })
  .post((req, res) => {
    res.status(200).render("edit-item");
  })
  .put((req, res) => {
    res.redirect("/");
  });

router.route("/contact/delete/:id").get((req, res) => {
  res.redirect("/");
});
module.exports = router;
