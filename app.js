require("dotenv").config();
require("./config/db/database");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const routerInterface = require("./router/interface.routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  favicon(path.join(__dirname, "public", "assets", "favicon", "favicon.ico"))
);

app.use("/", routerInterface);

app.listen(PORT, () =>
  console.log(`connecté à cette adresse: http://localhost:${PORT}`)
);
