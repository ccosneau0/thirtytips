

Ce repository est destiné à des fins scolaires.

Nous avons fait le choix du framewoork React.JS, pour une gestion plus simple de l'ensemble des composants. 
En effet, notre projet est composé de nombreux petites pièces de code, en appliqquant une architecture rigoureuse, en découpant méticuleusement nos pages, nous avons grâce à React.Js, un site qui s'adapte plus facilement. 
Par plus facilement nous entendons : le fait de lier une fonctionnalité à un composant. Limiter chaque composant à 100 lignes de code. Créer une dynamique d'adpatation, de réutilisatation et d'agilité  des components. Gagner du temps en terme de develeppemnt pure, pour passer plus de temps sur l'architechture du site. 
Notre architecture se définie comme telle, une page a son dossier - JS + SASS - cette page a des compomnenent => dossier component : nom de la page  sous dossier comportant les dossiers de chaque compotent (Component.JS + SASS)


It also uses JavaScript libraries : 

- Axios 

    L'utilisation de la librairie js  Axios se justifie par sa facilité d'ulisation : elle fonctionne tel un client HTTP, permet de requeter sur des API, et nottament faire de requête POST. Le tout de manière asynchrome pour un meilleur control des data, grâce aux intercepteurs. 

- React-router 

    Cette librairie permert de définir et d'utiliser des routes dans un seul composant. L'url  du navigateur est synchrone avec l'interface de l'application. Créer un cheminement simple, et rationel. 

- react-slideshow (=> https://github.com/femioladeji/react-slideshow)

    Petite fantaisy du projet, nous avions envie de tester et de nous servir de cette librairie pour sa gestion très rapide du slider. La librairie s'applique très bien au responsive, et tolère des adaptation design suffisante pour la tenue de notre projet. 

And css methodology : 

- Sass 
    A l'instar de React , SASS nous permet de découper et de hierarchiser notre code. De créer des variables, de définir des feuilles de style dédiées à certaines fonctionnalités. 
    D'importer et de "jouer" avec la hierarchisation. Et ainsi de rendre le code léger, lisible, clair et surtout rationnel. 
    Nous avons une vingtaine de feuille de style, dont 6 uniquement dédiés à la base du projet, variables les plus usités ( les fonts - les boutons - les formulaires - les icones - les couleurs). Toutes importées dans une feuille de style dite (par fantaisy) "bigStyle". 
    
    Aussi, *bigStyle* est une grosse valise de style que nous importons dans toutes les petites feuilles de styles dédiées à chaque component. Gros avantage : moins de ligne de code similaire et intempestives, valeurs similaires dans chaque component, gains de temps notable. 
    Et surtout : nous pouvons surcharger au besoin,  et si une modification design émerge au dernier moment et qu'elle s'applique sur de nombreux components (exemple: les boutons qui doivent changer  d'aspect -de padding/ couleur/ etc -),
    alors nous procédons à ce chagement directement dans la feuille de style dédiée aux boutons :
    => * *magie* * tous les boutons sur l'ensemble de projet auront changés- prendrons la nouvelle valeur.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

