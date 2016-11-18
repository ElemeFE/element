<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true,
        loading2: true,
        fullscreenLoading: false
      }
    },

    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>

## Loading (Chargement)

Afficher une animation pendant le chargement des données.

### Chargement dans un conteneur

Affiche l'animation dans un conteneur (tel qu'une table) pendant le chargement des données.

::: demo Element fournit deux façons d'invoquer `Loading`: directive et service. Pour la directive personnalisée `v-loading`, il suffit de lier une valeur `boolean` à celle-ci. Par défaut, le masque de chargement est ajouté à l'élément où la directive est utilisée. En ajoutant le modificateur `body`, le masque s'ajoute à l'élément body.
```html
<template>
  <el-table
    v-loading.body="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nom"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Adresse">
    </el-table-column>
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
</script>
```
:::

### Texte de chargement

Vous pouvez personnaliser un message texte.

::: demo Ajoutez l'attribut `element-loading-text` à l'élément sur lequel `v-loading` est lié, et sa valeur sera affichée sous le 'spinner'.
```html
<template>
  <el-table
    v-loading="loading2"
    element-loading-text="Chargement..."
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading2: true
      };
    }
  };
</script>
```
:::

### Chargement en plein écran

Afficher une animation en plein écran pendant le chargement des données.

::: demo Ajoutez le modificateur `fullscreen` pour créer un masque plein écran, et il sera ajouté au 'body'. Dans ce cas, si vous souhaitez désactiver le défilement sur le 'body', vous devez ajouter un autre modificateur `lock`.
```html
<template>
  <el-button
    type="primary"
    @click.native="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    Chargement plein écran pendant 3 secondes
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>
```
:::

### Service

Vous pouvez également appeler `Loading` avec un service. Importer un service de `Loading`:

```javascript
import { LoadingService } from 'element-ui';
```

Invocation:

```javascript
LoadingService(options);
```

Le paramètre `options` est la configuration de `Loading`, et ses détails peuvent être trouvés dans le tableau suivant. `LoadingService` renvoie une instance de `Loading`, et vous pouvez la fermer en appelant sa méthode `close`:

```javascript
let loadingInstance = LoadingService(options);
loadingInstance.close();
```

Si Element est importé entièrement, une méthode globale `$loading` sera enregistrée dans Vue.prototype. Vous pouvez l'appeler comme ceci: `this.$Loading(options)`, et il renvoie également une instance de `Loading`.

### Options
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | Le nœud DOM doit être chargé. Accepte un objet DOM ou une chaîne. S'il s'agit d'une chaîne, elle sera passée à `document.querySelector` pour obtenir le nœud DOM correspondant | object/string | — | document.body |
| body | identique au modificateur `body` de `v-loading` | boolean | — | false |
| fullscreen | identique au modificateur `fullscreen` de `v-loading` | boolean | — | true |
| lock | identique au modificateur `lock` de `v-loading` | boolean | — | false |
| text | texte de chargement affiché en dessous du 'spinner' | string | — | — |
| customClass | nom de classe personnalisé pour le composant `Loading` | string | — | — |
