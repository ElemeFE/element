## Installation

### npm
Installing with npm is recommended and it works seamlessly with [webpack](https://webpack.js.org/).

:::tip
Note that this doc is for 1.x, so you need the `legacy` tag when installing.
:::

```shell
npm i element-ui@legacy -S
```

### CDN
Get the latest version from [unpkg.com/element-ui](https://unpkg.com/element-ui@1.4/) , and import JavaScript and CSS file in your page.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui@1.4/lib/theme-default/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui@1.4/lib/index.js"></script>
```

:::tip
We recommend our users to lock Element's version when using CDN. For example, if you're using Element 1.4.8, you can lock CSS and JavaScript files like this: `https://unpkg.com/element-ui@1.4.8/lib/theme-default/index.css`, `https://unpkg.com/element-ui@1.4.8/lib/index.js`.
:::

### Hello world
If you are using CDN, a hello-world page is easy with Element. [Online Demo](https://jsfiddle.net/hzfpyvg6/18/)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui@1.4/lib/theme-default/index.css">
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
  <script src="https://unpkg.com/vue@2.5/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui@1.4/lib/index.js"></script>
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
