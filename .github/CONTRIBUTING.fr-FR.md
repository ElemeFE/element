# Guide à destination des contributeurs d'Element UI

Bonjour! Merci d'avoir choisi Element UI.

Element UI est une bibliothèque de composants basée sur Vue 2.0 pour les développeurs, les designers et les chefs de produits.

Nous sommes ravis que vous souhaitiez contribuer à Element. Avant de soumettre votre contribution, veuillez vous assurer de prendre un moment pour lire les indications suivantes.

## Concernant les issues

- Les issues concernent exclusivement les bugs, les demandes de fonctionnalités et les sujets liés à la conception. Les questions concernant d'autres sujets peuvent être fermées directement. Si vous avez des questions à propos de l'utilisation d'Element, veuillez vous rendre sur [Gitter](https://gitter.im/element-en/Lobby) pour obtenir de l'aide.

- Avant de soumettre une issue, veuillez vérifier si des problèmes similaires n'ont pas déjà été signalés.

- Veuillez spécifier la version de `Element` et `Vue` que vous utilisez, et fournir des informations sur le système d'exploitation et le navigateur. [JSFiddle](https://jsfiddle.net/) est recommandé afin de construire une démo pour que votre problème puisse être reproduit clairement.

## Concernant les pull requests

- Faites un fork de ce dépôt vers votre compte. Ne créez pas de branches ici.

- Les informations de validation doivent être formatées en tant que `[Nom du composant] : Info à propos de ce commit` (par exemple `Button : Fix xxx bug`)

- **NE PAS** inclure de fichiers dans le répertoire `lib`.

- Assurez-vous que l'exécution de `npm run dist` génère les bons fichiers.

- Pour des raisons de compatibilité et de taille de fichier, notre configuration babel n'importait que `preset-2015`, donc les API comme `Array.prototype.find` et `Object.assign` dans `ES2015` ne sont pas recommandées. Vous pouvez importer des polyfills si nécessaire.

- Faites un rebase avant la création d'une PR pour garder l'historique clair.

- Assurez-vous que les PRs sont créés dans la branche `dev` au lieu de la branche `master`.

- Si votre PR corrige un bug, veuillez fournir une description du bug en question.

- La fusion d'un PR nécessite deux responsables: l'un approuve les modifications après révision, puis l'autre les révise et les fusionne.

## Pré-requis
`Node.js 4+`, `yarn` et `npm 3+` sont requis. Note: nous utilisons yarn pour verrouiller les versions des dépendances, donc vous devriez installer les dépendances en utilisant `yarn` au lieu de `npm install`.
```shell
git clone git@github.com:ElemeFE/element.git
npm run dev

# open http://localhost:8085
```

> **Remarque** : modifiez le fichier `examples/play/index.vue`, utilisez le composant auquel vous contribuez, puis lancez `npm run dev:play`, allez sur [http://localhost:8085](http://localhost:8085), regardez le résultat rapidement et facilement.

Pour le build:

```shell
npm run dist
```

## Concernant le développement de composants
- Exécutez `make new <nom-du-composant>` pour créer un répertoire pour le nouveau composant. Les tests, le fichier d'entrée et la documentation sont inclus.
- Reportez-vous au `Button` pour les composants imbriqués.
- Reportez-vous à `Select` pour connaître les composants qui dépendent d'autres composants.

## Style du code
Il suffit de se conformer à la configuration [ESLint](https://github.com/ElemeFE/eslint-config-elemefe) de [ElemeFE](https://github.com/elemefe).
