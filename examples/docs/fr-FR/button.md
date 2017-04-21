<script>
  import { addClass } from 'wind-dom/src/class';
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let thirdDemo = demos[2];
        addClass(thirdDemo, 'intro-block');
      });
    }
  }
</script>

## Button (Buton)

Bouton communément utilisé.

### Utilisation de base

::: demo Il existe 7 thèmes de bouton définis par l'attribut `type`.
```html
<el-button>Bouton par défaut</el-button>
<el-button type="primary">Bouton principal</el-button>
<el-button type="text">Bouton texte</el-button>
```
:::

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

::: demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé. Il accepte une valeur `Boolean`.
```html
<el-button :plain="true" :disabled="true">Bouton par défaut</el-button>
<el-button type="primary" disabled>Bouton principal</el-button>
<el-button type="text" disabled>Bouton texte</el-button>
```
:::

### Indication de couleur

Différentes couleurs représentent des significations différentes.

::: demo Utilisez l'attribut `plain` pour créer un bouton ordinaire. Il accepte un `Boolean`. Vous pouvez attribuer différents `type` à un bouton simple comme mentionné ci-dessus. ** Note **: Lorsque vous utilisez le bouton simple, vous pouvez toujours définir `type` à la valeur `text`, mais cela ne change rien. Par défaut, un bouton simple sera appelé comme un `text button`.
```html
<div class="block">
  <span class="demonstration">Défaut</span>
  <span class="wrapper">
    <el-button type="success">Success</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button type="info">Info</el-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">Survolez pour afficher la couleur</span>
  <span class="wrapper">
    <el-button :plain="true" type="success">Success</el-button>
    <el-button :plain="true" type="warning">Warning</el-button>
    <el-button :plain="true" type="danger">Danger</el-button>
    <el-button :plain="true" type="info">Info</el-button>
  </span>
</div>
```
:::

### Bouton avec une icône

Utilisez des icônes pour ajouter plus de sens à un bouton. Vous pouvez utiliser l'icône seule pour économiser de l'espace, ou avec du texte.

::: demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pouvez trouver la liste des icônes dans le composant `icon` de Element. L'ajout d'icônes sur le côté droit du texte est possible avec une balise `<i>`. Des icônes personnalisées peuvent également être utilisées.
```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">Chercher</el-button>
<el-button type="primary">Télécharger<i class="el-icon-upload el-icon-right"></i></el-button>
```
:::

### Groupe de boutons

Afficher sous forme de groupe de boutons, peut être utilisé pour grouper une série d'opérations similaires.

::: demo Utilisez le tag `<el-button-group>` pour grouper vos boutons.
```html
<el-button-group>
  <el-button type="primary" icon="arrow-left">Page précédente</el-button>
  <el-button type="primary">Page suivante<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
```
:::

### Bouton de chargement

Cliquez sur le bouton pour charger des données. Le bouton affichera un état de chargement.

::: demo Attribuez l'attribut `loading` à `true` pour afficher l'état de chargement.
```html
<el-button type="primary" :loading="true">Chargement</el-button>
```
:::

### Tailles

Outre la taille par défaut, le composant `Button` fournit trois tailles supplémentaires pour vous permettre de choisir parmi différents scénarios.

::: demo Utilisez l'attribut `size` pour définir des tailles supplémentaires avec `large`, `small` ou `mini`.
```html
<el-button type="primary" size="large">Grand bouton</el-button>
<el-button type="primary">Bouton par défaut</el-button>
<el-button type="primary" size="small">Petit bouton</el-button>
<el-button type="primary" size="mini">Mini bouton</el-button>
```
:::

### Attributs
| Attributs      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | taille du bouton   | string  |   large/small/mini            |    —     |
| type     | type du bouton   | string    |   primary/success/warning/danger/info/text |     —    |
| plain     | déterminer si c'est un bouton simple   | Boolean    | true,false | false   |
| disabled  | Désactiver le bouton    | boolean   | true, false   | false   |
| icon  | Icône du bouton, accepte un nom d'icône du composant `icon` de Element | string   |  —  |  —  |
| autofocus  | Même que le bouton `autofocus` du bouton natif | boolean   |  —  |  false  |
| native-type | Identique à `type` du bouton natif | string | button/submit/reset | button |
