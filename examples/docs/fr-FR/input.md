<script>
  var Vue = require('vue');
  Vue.component('my-item-en', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'value' } }, [item.value]),
        h('span', { attrs: { class: 'link' } }, [item.link])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    data() {
      return {
        links: [],
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        textarea: '',
        select: '',
        state1: '',
        state2: '',
        state3: '',
        state4: ''
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
      },
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createStateFilter(queryString)) : links;

        cb(results);
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createStateFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>

<style>
  .demo-input.demo-en-US {
    .el-select .el-input {
      width: 120px;
    }
    .text {
      font-size: 14px;
      color: #8492a6;
    }
    .el-input {
      width: 180px;

      & + .el-input,
      & + .el-textarea {
        margin-top: 15px;
      }
    }
    .el-textarea {
      width: 414px;
    }
    .el-input-group {
      min-width: 260px;
    }
    .el-input-group + .el-input-group {
      margin-top: 15px;
    }
    .el-autocomplete {
      display: inline-block;
    }
    .inline-input {
      .el-input {
        display: inline-block;
        vertical-align: top;
        margin: 10px 5px;
      }
      .el-autocomplete {
        margin: 10px 0 0;

        .el-input {
          margin: 0;
        }
      }
    }
    .tac {
      text-align: center;

      .el-autocomplete {
        text-align: left;
      }
    }
    .el-row.border-grid {
      .el-col:not(:last-child) {
        border-right: 1px solid rgba(224,230,237,0.50);
      }
    }
    .my-autocomplete {
      li {
        line-height: normal;
        padding: 7px *;

        .value {
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .link {
          font-size: 12px;
          color: #b4b4b4;
        }
      }
    }
  }
</style>

## Input (Champ de saisie)

Saisissez les données à l'aide de la souris ou du clavier.

### Utilisation de base

::: demo
```html
<el-input
  placeholder="Veuillez saisir du texte"
  v-model="input">
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### Désactivé

::: demo Désactivez le champ de saisie avec l'attribut `disabled`.
```html
<el-input
  placeholder="Veuillez saisir du texte"
  v-model="input1"
  :disabled="true">
</el-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```
:::

### Champ avec icône

Ajouter une icône pour indiquer le type d'entrée.

::: demo Vous pouvez ajouter une icône à la fin du champ en définissant l'attribut `icon`.
```html
<el-input
  placeholder="Choisissez une date"
  icon="time"
  v-model="input2"
  @click="handleIconClick">
</el-input>

<script>
export default {
  data() {
    return {
      input2: ''
    }
  },
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  }
}
</script>
```
:::

### Zone de texte

Redimensionnable pour entrer plusieurs lignes de texte.

::: demo Ajoutez l'attribut `type="textarea"` pour changer un type `input` en `textarea` natif.
```html
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Veuillez saisir du texte"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::

### Entrée mixte

Préparer ou ajouter un élément, généralement un label ou un bouton.

::: demo Utilisez les `slot` pour insérer des éléments à l'entrée ou à la sortie.
```html
<el-input placeholder="Veuillez saisir du texte" v-model="input3">
  <template slot="prepend">Http://</template>
</el-input>
<el-input placeholder="Veuillez saisir du texte" v-model="input4">
  <template slot="append">.com</template>
</el-input>
<el-input placeholder="Veuillez saisir du texte" v-model="input5" style="width: 300px;">
  <el-select v-model="select" slot="prepend" placeholder="Select">
    <el-option label="Restaurant" value="1"></el-option>
    <el-option label="N° de commande" value="2"></el-option>
    <el-option label="Tél" value="3"></el-option>
  </el-select>
  <el-button slot="append" icon="search"></el-button>
</el-input>

<style>
.el-select .el-input {
  width: 120px;
}
</style>

<script>
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  }
}
</script>
```
:::

### Tailles

::: demo Ajoutez l'attribut `size` pour modifier la taille du champ. En plus de la taille par défaut, il existe trois autres options: `large`, `small` et `mini`.
```html
<div class="inline-input">
  <el-input
    size="large"
    placeholder="Veuillez saisir du texte"
    v-model="input6">
  </el-input>
  <el-input
    placeholder="Veuillez saisir du texte"
    v-model="input7">
  </el-input>
  <el-input
    size="small"
    placeholder="Veuillez saisir du texte"
    v-model="input8">
  </el-input>
  <el-input
    size="mini"
    placeholder="Veuillez saisir du texte"
    v-model="input9">
  </el-input>
</div>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>
```
:::

### Saisie semi-automatique

Vous pouvez obtenir des suggestions en fonction de l'entrée actuelle.

::: demo Le composant de saisie semi-automatique fournit des suggestions d'entrée. L'attribut `fetch-suggestions` est une méthode qui renvoie l'entrée suggérée. Dans cet exemple, `querySearch (queryString, cb)` renvoie des suggestions au composant via `cb(data)` lorsque les suggestions sont prêtes.
```html
<el-row class="inline-input border-grid">
  <el-col :span="12" class="tac">
    <div class="text">Liste de suggestions lorsque activé</div>
    <el-autocomplete
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Veuillez saisir du texte"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12" class="tac">
    <div class="text">Liste des suggestions d'entrée</div>
    <el-autocomplete
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Veuillez saisir du texte"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // Appeler la fonction de callback pour retourner les suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Modèle personnalisé

Personnaliser la façon dont les suggestions sont affichées.

::: demo
```html
<el-autocomplete
  class="my-autocomplete"
  v-model="state3"
  :fetch-suggestions="querySearch"
  custom-item="my-item-en"
  placeholder="Veuillez saisir du texte"
  @select="handleSelect"
></el-autocomplete>

<style>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>

<script>
  Vue.component('my-item-en', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'value' } }, [item.value]),
        h('span', { attrs: { class: 'link' } }, [item.link])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    data() {
      return {
        links: [],
        state3: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? link.filter(this.createFilter(queryString)) : links;
        // Appeler la fonction de callback pour retourner les suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Recherche à distance

Rechercher des données du côté serveur.

::: demo
```html
<el-autocomplete
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="Veuillez saisir du texte"
  @select="handleSelect"
></el-autocomplete>
<script>
  export default {
    data() {
      return {
        links: [],
        state4: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>
```
:::

### Input attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ----| ----| ----| ---- | ----- |
|type| identique à l'attribut `type` de l'entrée native, sauf qu'il peut être `textarea` | string | — | text |
|value| valeur de liaison | string/number| — | — |
|maxlength| longueur maximum du texte d'entrée | number| — | — |
|minlength| longueur minimum du texte d'entrée | number | — | — |
|placeholder| texte du champ vide | string | — | — |
|disabled | si le champ est désactivée | boolean | — | false |
|size | taille d'entrée, fonctionne lorsque `type` n'est pas 'textarea' | string | large/small/mini | — |
|icon | nom de l'icône | string | — | — |
|rows | nombre de lignes de la zone de texte, ne fonctionne que lorsque `type` est 'textarea' | number | — | 2 |
|autosize | si la zone de texte a une hauteur adaptative, ne fonctionne que lorsque `type` est 'textarea'. Peut accepter un objet, p. Ex. {MinRows: 2, maxRows: 6}  | boolean/object | — | false |
|auto-complete | identique à `auto-complete` du champ natif | string | on/off | off |
|name | identique à `name` du champ natif | string | — | — |
|max | identique à `max` du champ natif | * | — | — |
|min | identique à `min` du champ natif | * | — | — |
|autofocus | identique à `autofocus` du champ natif | boolean | — | false |
|form | identique à `form` du champ natif | string | — | — |


### Input événements
| Nom de l'événement | Description | Paramètres |
|----| ----| ----|
|click | déclenché lorsque l'icône à l'intérieur du champ est cliquée | event object |

### Autocomplete attributs
Attributs | Description | Type | Options | Défaut
|----| ----| ----| ---- | -----|
|placeholder| texte du champ vide de la saisie semi-automatique| string | — | — |
|disabled | si la saisie semi-automatique est désactivée  | boolean | — | false|
|value | valeur de liaison | string | — | — |
|custom-item | nom du composant de votre liste de suggestion personnalisée | string | — | — |
|fetch-suggestions | Une méthode pour extraire des suggestions d'entrée. Lorsque les suggestions sont prêtes, invoquez `callback(data:[])` pour les retourner à `Autocomplete` | Function(queryString, callback) | — | — |

### Autocomplete événements
| Nom de l'événement | Description | Paramètres |
|----| ----| ----|
|select | déclenché lorsque l'on clique sur une suggestion | suggestion being clicked |
