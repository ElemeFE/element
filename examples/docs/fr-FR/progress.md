## Progress

Progress est utilisé pour afficher la progression d'une opération et informer l'utilisateur de son status actuel.

### Barre de progression linéaire (pourcentage externe)

:::demo Utilisez l'attribut `percentage` pour indiquer le pourcentage. Cet attribut est **requis** et doit être compris entre 0 et 100.
```html
<el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="80" color="#8e71c7"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
```
:::

### Barre de progression linéaire (pourcentage interne)

Dans ce cas le pourcentage ne prends pas de place en plus.

:::demo L'attribut `stroke-width` détermine le `width` de la barre de progression. Utilisez `text-inside` mettre la description à l'intérieur de la barre.
```html
<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
```
:::

### Barre de progression circulaire

:::demo Vous pouvez mettre l'attribut `type` à `circle` pour obtenir une barre circulaire, et utiliser `width` pour changer la taille du cercle.
```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
<el-progress type="circle" :percentage="100" status="text">Terminé</el-progress>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| --- | ---- | ---- | ---- | ---- |
| **percentage** | Le pourcentage, **requis**. | number | 0-100 | 0 |
| type | Le type de barre. | string | line/circle | line |
| stroke-width | La largeur de la barre. | number | — | 6 |
| text-inside | Si le pourcentage doit être à l'intérieur de la barre, ne marche que si `type` est 'line'. | boolean | — | false |
| status | Le statut actuel de la progression. | string | success/exception/text | — |
| color  | La couleur de fon de la barre. Écrase `status`. | string | — | — |
| width | La largeur du canvas dans le cas d'une barre circulaire. | number | — | 126 |
| show-text | Si le pourcentage doit être affiché. | boolean | — | true |
