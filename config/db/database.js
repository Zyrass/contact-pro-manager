const mongoose = require("mongoose");

const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLIENT_NAME = process.env.MONGODB_CLIENT_NAME;
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLIENT_NAME}.mongodb.net/${DATABASE_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connecté à la bdd de mongoDB"))
  .catch((err) => console.log(err.stack));
