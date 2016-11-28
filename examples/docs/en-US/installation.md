## Installation

### npm
Installing with npm is recommended and it works seamlessly with [webpack](https://webpack.js.org/).

```shell
npm i element-ui -D
```

### CDN
Get the latest version from [unpkg.com/element-ui](https://unpkg.com/element-ui/) , and import JavaScript and CSS file in your page.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

### Hello world
If you are using CDN, a hello-world page is easy with Element. [Online Demo](http://codepen.io/QingWei-Li/pen/vXwJrY)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
</head>
<body>
  <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
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
If you are using npm and wish to apply webpack, please continue to the next page: Quick Start.
