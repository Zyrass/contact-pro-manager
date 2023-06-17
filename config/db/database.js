/**
 * =======================================================================
 * Dépendances ou module
 * =======================================================================
 */
const mongoose = require('mongoose')

/**
 * =======================================================================
 * Configuration des variables d'environnement
 * =======================================================================
 */
const PSEUDO = process.env.MONGODB_PSEUDO
const PASSWORD = process.env.MONGODB_PASSWORD
const CLIENT_NAME = process.env.MONGODB_CLIENT_NAME
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME

/**
 * =======================================================================
 * Masquer les warning pour des futures version
 * =======================================================================
 */
mongoose.set('strictQuery', true)

/**
 * =======================================================================
 * Connexion selon l'URI récupérer sur MongoDB pour VsCode
 * =======================================================================
 */
mongoose
    .connect(
        `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLIENT_NAME}.mongodb.net/${DATABASE_NAME}`,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        },
    )
    .then(() => console.log('Connexion réussi à la base de données de mongoDB'))
    .catch((err) => {
        console.log(err.message)
        console.log(err.stack)
    })
