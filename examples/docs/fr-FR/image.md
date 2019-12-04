## Image

En plus des propriétés natives de img, ce composant supporte le lazy loading, les placeholder personnalisés, les échecs de téléchargement, etc.

### Usage basique

:::demo Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur grâce à `fit`, identique au [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) natif.
```html
<div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
  </div>
</div>

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

### Placeholder

:::demo Placeholder personnalisé qui s'affiche lorsque l'image n'est pas encore chargée, grâce à `slot = placeholder`.
```html
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Personnalisé</span>
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        Chargement<span class="dot">...</span>
      </div>
    </el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>
```
:::

### Échec du chargement

:::demo Contenu personnalisé qui s'affiche lorsque le chargement a échoué, grâce à `slot = error`.
```html
<div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-image></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Personnalisé</span>
    <el-image>
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
  </div>
</div>
```
:::

### Lazy Loading

:::demo Utilisez le lazy loading avec `lazy = true`. Les images ne se chargeront que lorsque le scrolling les atteindra. Vous pouvez indiquer le conteneur grâce à `scroll-container`. Si undefined, ce sera le conteneur parent le plus proche avec la propriété overflow à auto ou scroll.
```html
<div class="demo-image__lazy">
  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
</div>

<script>
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
</script>
```
:::

### Image Preview

:::demo allow big image preview by setting `previewSrcList` prop.
```html
<div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>
```
:::

### Attributs
| Attribut | Description | Type  | Valeurs acceptées | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| src | Source de l'image, identique au natif. | string | — | - |
| fit | Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur, identique à [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string | fill / contain / cover / none / scale-down | - |
| alt | Attribut alt natif.| string | - | - |
| referrer-policy | Attribut referrerPolicy natif.| string | - | - |
| lazy | Si le lazy loading doit être utilisé. | boolean | — | false |
| scroll-container | Le conteneur auquel ajouter le listener du scroll en mode lazy loading. | string / HTMLElement | — | Le conteneur parent le plus proche avec la propriété overflow à auto ou scroll. |
| preview-src-list | allow big image preview | Array | — | - |
| z-index | set image preview z-index | Number | — | 2000 |

### Évènements
| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| load | Identique au load natif. | (e: Event) |
| error | Identique au error natif. | (e: Error) |

### Slots
| Nom | Description |
|---------|-------------|
| placeholder | Se déclenche quand l'image charge. |
| error | Se déclenche quand le chargement de l'image a échoué. |
