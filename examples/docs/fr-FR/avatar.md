## Avatar avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.
Les avatars peuvent être utilisés pour représenter des personnes ou des objets. Les images, icônes et les caractères sont supportés.

### Basic

utilisez les prop `shape` et` size` pour définir la forme et la taille de l'avatar

:::demo
```html
<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">cercle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">carré</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

```
:::

### Types

Les images, icônes et les caractères sont supportés.

:::demo
```html
<template>
  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>
```
:::

### fallback en cas d'erreur de chargement d'image

fallback en cas d'erreur de chargement d'image

:::demo
```html
<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

```
:::

### Comment l'image s'adapte à son conteneur

Défini comment l'image s'adapte à son conteneur, pareil que [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

:::demo
```html
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>

```
:::

### Attributes

| Attribute      | Description          | Type      | Valeurs acceptées       | Default  |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | Défini le type de représentation sur Icon, plus d’informations sur le composant Icon   | string          |        |        |
| size              | Défini la taille de l'avatar                     | number/string | number / large / medium / small | large  |
| shape             | Défini la forme de l'avatar  | string |    circle / square     |   circle  |
| src               | L'adresse de l'image pour un avatar image | string |        |      |
| srcSet            | Une liste d'un ou plusieurs string séparés par des virgules indiquant un ensemble de sources d'images possibles que le user agent peut utiliser | string |        |      |
| alt               | Cet attribut définit une description textuelle alternative de l'image | string |        |      |
| fit               | Défini comment l'image s'adapte à son conteneur | string |    fill / contain / cover / none / scale-down    |   cover   |

### Évènements

| Event Name | Description         | Paramètres  |
| ------ | ------------------ | -------- |
| error  | handler en cas d'erreur de chargement de l'image, renvoie false pour éviter le fallback par défaut |(e: Event)  |

### Slot

| Slot Name | Description |
| default  | personnalise le contenu de l'avatar |
