## Installation

### npm
Installing with npm is recommended and it works seamlessly with [webpack](https://webpack.js.org/).

```shell
npm i tmconsulting-ui -S
```

### CDN
Get the latest version from [unpkg.com/tmconsulting-ui](https://unpkg.com/tmconsulting-ui/) , and import JavaScript and CSS file in your page.

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/tmconsulting-ui/lib/theme-chalk/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/tmconsulting-ui/lib/index.js"></script>
```

:::tip
We recommend our users to lock TMui's version when using CDN. Please refer to [unpkg.com](https://unpkg.com) for more information.
:::

### Hello world
If you are using CDN, a hello-world page is easy with TMui. [Online Demo](https://jsfiddle.net/hzfpyvg6/14/)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/tmconsulting-ui/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app">
    <tm-button @click="visible = true">Button</tm-button>
    <tm-dialog :visible.sync="visible" title="Hello world">
      <p>Try TMui</p>
    </tm-dialog>
  </div>
</body>
  <!-- import Vue before TMui -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/tmconsulting-ui/lib/index.js"></script>
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
