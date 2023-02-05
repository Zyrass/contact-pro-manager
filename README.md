# TP Contact Pro Manager

Conception d'une API **CRUD** ainsi que d'une interface totalement indépendande de cette API.

##  📍 Comment l'utiliser

● Cloner le repository

```sh
# Lancer cette commande
git clone COLLER_ICI_L\'URL_QUE_VOUS_AVEZ_COPIER_SUR_MON_REPOSITORY
```

● Déplacer vous dans le répertoire fraîchement créer

```sh
# Pour se déplacer dans le terminal
cd contact-pro-manager
```

_contact-pro-manager_ étant le nom du répertoire qui aura été créer.

● Lancer l'installation des paquets

```sh
# version longue
npm install

# version courte
npm i
```

_L'option **--save** est obsolète de nos jour dans le sens où elle a été inclus dans les version récente de npm_.

● Renommer le .env.example

La connexion sera déjà pré-configuré.
Mais au cas où la configuration se base sur le contenu ci-dessous

```js
// Dans la DB vous obtiendrez ceci
const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLIENT_NAME = process.env.MONGODB_CLIENT_NAME;
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

// URI utilisé
`mongodb+srv://${PSEUDO}:${PASSWORD}@${CLIENT_NAME}.mongodb.net/${DATABASE_NAME}`

HOSTNAME= // localhost
PORT= // 8080 par exemple
MONGODB_PSEUDO= // votre pseudo sur mongoDB
MONGODB_PASSWORD= // votre mot de passe personnel

// Ci-dessous, c'est important de bien respecter la syntaxe (nom.quelque_chose)
MONGODB_CLIENT_NAME= // le_nom_après_le_arobase.quelque_chose_d'aléatoire
MONGODB_DATABASE_NAME= // titre de la database séparer par des underscore ( _ )

// Ci-dessous, cette variable est utilisé dans le modèle pour définir la collection qui sera utilsié.
MONGODB_COLLECTION_NAME= // nom de la collection IMPERATIVEMENT EN MINUSCULE ET AVEC UN S A LA FIN (il sera ajouté par défaut avec mongodb donc autant le mettre).
```

● On devrait pouvoir lancer le server si tout à bien été respecter

```sh
# Pour lancer le server
npm start
```

## 📍 Info utile (Bonus)

Pourquoi ne pas faire un **`npm update`** ?

> Si par manque de chance un module était mal configurer dans le package.json au niveau de la selection des versions,
> alors l'update viendrait à casser totalement le code.

prenom un exemple avec **Boxen**.

```js
// Boxen avec CommonJS
const boxen = require("boxen"); // V5.1.2 Dernière version

// Boxen avec les modules pris en charge
import boxen from boxen; // V7 actuellement
```

**Pour utiliser une version avec commonJS, il faut installer la dernière version qui prenait en compte commonJS soit:**

```sh
# obtenir la version avec commonJS
npm i boxen@5.1.2

# La toute dernière version (7.x.x)
npm i boxen
```

**_Donc l'update comme je l'ai dis peut-être vachement dangereux si il n'est pas maitrisé_**.
