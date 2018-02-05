## Instalación

### npm
Instalar mediante npm es la forma recomendada ya que se integra facilmente con [webpack](https://webpack.js.org/).

```shell
npm i element-ui -S
```

### CDN 
Obtenga la última versión desde [unpkg.com/element-ui](https://unpkg.com/element-ui/) , e importe el JavaScript y los archivos CSS en su página.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

##Tip
Recomendamos a nuestros usuarios congelar la versión de Elemet cuando usas un CDN. Por favor, refiérase a [unpkg.com](https://unpkg.com) para más información.


### Hello world
Si esta usando un CDN, una página con Hello-World es fácil con Element. [Online Demo](https://jsfiddle.net/hzfpyvg6/14/)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
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
Si esta usando npm y desea combinarlo con webpack, por favor continue a la siguiente página: Quick Start

