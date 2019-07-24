## InfiniteScroll

Charge plus de données quand le bas de la page est atteint

### Utilisation de base
Ajoutez `v-infinite-scroll` à la liste pour exécuter automatiquement la méthode de chargement lors du défilement vers le bas.
:::demo
```html
<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>
```
:::

### Désactiver le chargement

:::demo
```html
<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">Pas plus</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
```
:::


### Attributs

| Attribut | Description | Type  | Valeur acceptées | Défaut   |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| infinite-scroll-disabled | Est désactivé           | boolean      | - |false |
| infinite-scroll-delay   | Throttle le delais (ms)   | number       |   - |200   |
| infinite-scroll-distance| Distance de déclenchement (px) | number   |- |0 |
| infinite-scroll-immediate | S'il faut exécuter la méthode de chargement immédiatement, au cas où le contenu ne pourrait pas être set à l'état initial. | boolean | - |true |
