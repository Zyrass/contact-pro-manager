# TP Contact Pro Manager

Conception d'une API **CRUD** ainsi que d'une interface totalement indépendande de cette API.

## Comment l'utiliser

1. Cloner le repository

```sh
# Lancer cette commande
git clone COLLER_ICI_L\'URL_QUE_VOUS_AVEZ_COPIER_SUR_MON_REPOSITORY
```

2. Déplacer vous dans le répertoire fraîchement créer

```sh
# Pour se déplacer dans le terminal
cd contact-pro-manager
```

_contact-pro-manager_ étant le nom du répertoire qui aura été créer.

3. Lancer l'installation des paquets

```sh
# version longue
npm install

# version courte
npm i
```

_L'option **--save** est obsolète de nos jour dans le sens où elle a été inclus dans les version récente de npm_.

4. Renommer le .env.example

Effectivement il faudra renommer le fichier **.env.example** qui permettra de faire fonctionner l'application.
J'ai tout de même quelques recommandations à donner.

```js
// Dans la DB vous obtiendrez ceci
const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLIENT_NAME = process.env.MONGODB_CLIENT_NAME;
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

// URL utilisé
`mongodb+srv://${PSEUDO}:${PASSWORD}@${CLIENT_NAME}.mongodb.net/${DATABASE_NAME}`

HOSTNAME= // localhost
PORT= // 8080 par exemple
MONGODB_PSEUDO= // votre pseudo sur mongoDB
MONGODB_PASSWORD= // votre mot de passe personnel

// Ci-dessous, c'est important de bien respecter la syntaxe (nom.)
MONGODB_CLIENT_NAME= // le_nom_après_le_arobase.quelque_chose_d'aléatoire
MONGODB_DATABASE_NAME= // titre de la database séparer par des underscore ( _ )
MONGODB_COLLECTION_NAME= // nom de la collection IMPERATIVEMENT EN MAJUSCULE ET AVEC UN S A LA FIN (il sera ajouté par défaut avec mongodb donc autant le mettre).
```

5. On devrait pouvoir lancer le server si tout à bien été respecter

```sh
# Pour lancer le server
npm start
```

## Info utile (Bonus)

Pourquoi ne pas faire un **`npm update`** ?

> Si par manque de chance un module était mal configurer dans le package.json au niveau de la selection des versions,
> alors l'update viendrait à casser totalement le code.

prenom un exemple avec **Boxen**.

Actuellement ils en sont à la v7... Cette V7 utilise les modules et non **commonsJS**.
Les modules c'est avec **import boxen from boxen**, commonJS c'est avec **const boxen = require("boxen")**.

Pour utiliser une version avec commonJS, il faut installer la dernière version qui implémentait l'utilisation avec commonJS soit:

```sh
# obtenir la version avec commonJS
npm i boxen@5.1.2

# La toute dernière version (7.x.x)
npm i boxen
```

**Donc l'update comme je l'ai dis peut-être vachement dangereux si il n'est pas maitrisé**.
