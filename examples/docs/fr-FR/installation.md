## Installation

### npm

L'installation avec npm est recommandée, car elle fonctionne parfaitement avec [webpack] (https://webpack.js.org/).

```shell
npm i element-ui -D
```

### CDN

Obtenez la dernière version de [unpkg.com/element-ui](https://unpkg.com/element-ui/) et importez le fichier JavaScript et CSS dans votre page.

```html
<!-- importer le CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
<!-- importer le JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

### Hello world

Si vous utilisez CDN, une page hello-world est facile avec Element. [Démo en ligne] (http://codepen.io/QingWei-Li/pen/vXwJrY)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- importer le CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
</head>
<body>
  <div id="app">
    <el-button @click.native="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Tester Element</p>
    </el-dialog>
  </div>
</body>
  <!-- importer Vue avant Mint UI -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- importer le JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</html>
```
Si vous utilisez npm et souhaitez appliquer webpack, passez à la page suivante: Quick Start.
