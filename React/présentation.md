### Commencer avec React 
![React](https://risingstack-blog.s3.amazonaws.com/2016/Jan/react_best_practices-1453211146748.png)
___
##### Qu'est-ce que ReactJS

React est une librairie JavaScript open source pour construire des interfaces utilisateurs dynamiques.

* Penser à `React` comme le "V" de MVC
* Beacoup utiliser dans les SPA (Single Page Application)
* Maintenu par Facebook, Instagram & une communité de developpeurs

#### Pourquoi l'utiliser ?

React aide les developpeurs à construire des applications avec des données dynamiques.


#### Compatibilité

React gère seulement l'**UI** ou la "vue" de sorte qu'elle puisse être mélangé avec d'autres technologies, librairies et frameworks MVC.

* Angular 
* React
* Ruby on Rails


#### Virtual DOM

React maintient un DOM en son propre

* Aide à identifier les parties ont changé en comparant la nouvelle version avec celle mémorisée auparavant
* Détermine comment télécharger les navigateurs DOM plus efficacement
* Fait pour une application plus rapide


#### C'est du JS

**React** peut se lancer sur les deux **client** ou **serveur**

1. Renvoie la forme du `HTML` depuis le JS venant du serveur
2. Le navigateur charge tout le `HTML`
3. Le `javascript` charge le reste de l'application

#### La base du développement d'un composant
Faire des paquets de composants les plus petits possible

1. Offre une plus grande visibilité
2. Produit un code avec une plus grande ré-utilisabilité
3. Le futur de Javascript

#### JSX - Javascript Syntax Extension

* ressemble à XML
* Définit une syntaxe familière pour définir des structures d'arbres avec des attributs
* n'est pas obligatoire mais rend les choses plus faciles

#### Exemple simple :
```
var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
	<Hello name="World" />,
    document.getElementById('container')
);
```






 


