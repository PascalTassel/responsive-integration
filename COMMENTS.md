# Commentaires

J'ai pris beaucoup de plaisir à intégrer cette maquette !

Pour répondre au travail demandé, j'ai choisi de travailler sans framework CSS. J'espère que le résultat sera à la hauteur de vos attentes.

## Dossiers du projet

Le dossier `src/app/scss/components/` contient les styles relatifs aux **composants**. Les styles se réfèrent aux variables définies dans le fichier `src/app/scss/components/_vars`.

Le dossier `src/app/scss/layouts/` contient les styles relatifs au **layout**. Les variables utilisées sont définies dans le fichier `src/app/scss/_vars`.

## Intégration

Afin de contrôler l'affichage sur différentes tailles d'écran, j'ai créé différents **points de rupture** : `mobile`, `tablet`, `desktop` et `xl`.

Je suis intervenu dans le fichier `src/app/app.component.ts` pour gérer le `toggle` de la classe `navigation__wrapper--closed` dans le menu de navigation.

### Unité

Toutes les tailles, hormis les bordures, sont définies en `rem`.

Depuis une variable `$font-size-root`, j'ai défini la taille par défaut du texte à `16px` puis appliqué un `font-size` de `.875rem` (soit `14px`) sur le `body`.

Les valeurs des propriétés `padding` et `margin` sont calculées à partir de la variable `$spacing`, définie à `.5rem`, soit `8px`.

### Icônes

J'ai choisi d'utiliser la plupart des icones sous forme de police de caractère, créée à l'aide d'[Icomoon](https://icomoon.io/).

Certaines ont été intégrées sous forme d'images d'arrière-plan, comme par exemple celle du champ de recherche.

### Accessibilité

J'ai ajouté des attributs `role` et `aria` pour rendre la page accessible et utilisé une sémantique `HTML` appropriée.

## Screenshot

![screenshot](/screenshot.jpg)
