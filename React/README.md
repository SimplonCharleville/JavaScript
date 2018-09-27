# Initiation à React en relation avec une base de données NoSQL (MongoDB)

### Prérequis :
* [Installation de Node.js](https://nodejs.org/fr/download/)
* [Installation de MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
* Facultatif (mais conseillé) :
  * React Developer Tools
  * [Installation de Yarn](https://cedriclegallo.fr/posts/201702/face-face-yarn-vs-npm/)
  * [Installation de MongoDB Compass](https://www.mongodb.com/download-center?jmp=nav#compass)

### Etape 1 : créer sa 1ère application React
* Installez Node.js
* Installez npm >=6 (si nécessaire, vérifiez avant la version installée)
* Créez une application "hello-world" avec la commande create-react-app
* Lancez l'application
* Parcourez les différents fichiers de l'application pour comprendre la structure React
* Modifiez le titre (Hello World) et le logo

### Etape 2 : se familiariser avec l'univers React et MongoDB
* Suivez [ce tuto](https://appdividend.com/2018/04/05/react-express-tutorial-example/) et reproduisez l'application fonctionnelle.
* Générez un build de production.

### Etape 3 : on y va !
A partir d'un "create-react-app", vous devez implémenter un back-office permettant de :
* Lister les users
* Créer un user
* Modifier un user
* Supprimer un user
```
{
  'age': Number,
  'nom': String,
  'type': String
}
```

* Lister les projets
* Créer un projet en lien avec un user
* Modifier un projet
* Supprimer un projet
```
{
  'titre': String,
  'description': String
  'createur': String
}
```

Faire un repo github avec le projet.

### Ressources :
* [Site officiel React](https://reactjs.org/)
* [GitHub React](https://github.com/facebook/create-react-app)
* [Introduction à React](https://www.synbioz.com/blog/introduction_a_react)
* [Introduction à MongoDB](https://openclassrooms.com/fr/courses/1915371-guide-de-demarrage-pour-utiliser-mongodb)
* [Gros tuto React sur OpenClassrooms](https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664388-decouvrez-lutilite-et-les-concepts-cles-de-react)
* ...
