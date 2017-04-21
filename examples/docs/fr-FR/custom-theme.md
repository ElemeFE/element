## Custom theme (Thème personnalisé)

Element utilise du CSS BEM-styled pour que vous puissiez remplacer facilement les styles. Mais si vous avez besoin de remplacer des styles à grande échelle, p. Ex. Changer la couleur du thème de bleu à orange ou vert. Tout surcharger un par un n'est pas une bonne idée, et c'est là que notre outil de personnalisation de thème est utile.

### Installer les outils

Installez d'abord le générateur de thème globalement ou localement. L'installation locale est recommandée car de cette façon, lorsque d'autres clonent votre projet, npm l'installera automatiquement pour eux.
```shell
npm i element-theme -D
```

Ensuite, installez le thème par défaut à partir de npm ou GitHub.

```shell
# from npm
npm i element-theme-default -D

# from GitHub
npm i https://github.com/ElementUI/theme-default -D
```

### Initialiser le fichier de variable

Après avoir installé avec succès les paquets ci-dessus, une commande nommée `et` est disponible dans CLI (si les paquets sont installés localement, utilisez plutôt `node_modules/.bin/et`). Exécutez `-i` pour initialiser le fichier de variable qui sort comme `element-variables.css` par défaut. Vous pouvez aussi spécifier son répertoire de sortie comme vous le souhaitez.

```shell
node_modules/.bin/et -i [custom output directory]

> ✔ Generator variables file
```

Dans `element-variables.css`, vous pouvez trouver toutes les variables que nous avons utilisées pour le style Element et elles sont définies en style CSS4:

```css
:root {

  /* Colors
  -------------------------- */
  --color-primary: #20a0ff;
  --color-success: #13ce66;
  --color-warning: #f7ba2a;
  --color-danger: #ff4949;
  --color-info: #50BFFF;
  --color-blue: #2e90fe;
  --color-blue-light: #5da9ff;
  --color-blue-lighter: rgba(var(--color-blue), 0.12);
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #C0CCDA;
```

### Modifier les variables

Il suffit de modifier `element-variables.css`, p. Ex. Changer la couleur du thème en rouge:

```CSS
--color-primary: red;
```

### Créer un thème

Après avoir sauvegardé le fichier de variable, utilisez `et` pour construire votre thème. Vous pouvez activer le mode `watch` en ajoutant un paramètre` -w`:

```shell
node_modules/.bin/et

> ✔ build theme font
> ✔ build element theme
```

### Importer un thème personnalisé

Par défaut, le fichier de thème de construction est placé à l'intérieur de `./theme`. Vous pouvez spécifier son répertoire de sortie avec le paramètre `-o`. Importer votre propre thème est comme importer le thème par défaut, mais cette fois-ci, vous importez le fichier que vous venez de créer:

```javascript
import './theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

### Importer un thème de composant à la demande

Si vous utilisez `babel-plugin-component` pour l'importation à la demande, modifiez simplement `.babelrc` et spécifiez `styleLibraryName` avec le chemin d'accès de votre thème personnalisé par rapport à `.babelrc`. Notez que `~` est requis:

```json
{
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "~theme"
    }
  ]]]
}
```

Si vous ne connaissez pas `babel-plugin-component`, veuillez consulter <a href="./#/fr-FR/component/quickstart"> Démarrage rapide </a>. Pour plus de détails, consultez le [répertoire du projet] (https://github.com/ElementUI/element-theme) de `element-theme`.
