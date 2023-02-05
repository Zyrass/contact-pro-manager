/**
 * =======================================================================
 * Dépendances (modules)
 * =======================================================================
 */
require("dotenv").config();
require("./config/db/database");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

/**
 * =======================================================================
 * Import du routing
 * =======================================================================
 */
const routerInterface = require("./router/interface.routes");
const routerApi = require("./router/api.routes");

/**
 * =======================================================================
 * Configuration de l'application
 * =======================================================================
 */
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
const app = express();

/**
 * =======================================================================
 * Prise en charge du moteur de rendue EJS
 * =======================================================================
 */
app.set("view engine", "ejs");

/**
 * =======================================================================
 * Mise en places des Middlewares
 * =======================================================================
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  favicon(path.join(__dirname, "public", "assets", "favicon", "favicon.ico"))
);

/**
 * =======================================================================
 * Utilisation du routing selon une certaine route.
 * "/" => Interface
 * "/api" => Api
 * =======================================================================
 */
app.use("/", routerInterface);
app.use("/api", routerApi);

/**
 * =======================================================================
 * Démarage de l'application selon un certain PORT.
 * =======================================================================
 */
app.listen(PORT, () =>
  console.log(`connecté à cette adresse: http://${HOSTNAME}:${PORT}`)
);
