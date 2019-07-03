# @femessage/theme-deepexi
deepexi 自定义 element 主题

## Installation
```shell
yarn add @femessage/theme-deepexi
```

## Usage

在 nuxt 中使用
```javascript
// 修改 nuxt.config.js
babel: {
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: '~node_modules/@femessage/theme-deepexi/lib'
      }
    ]
  ]
}
```
在 vue 项目中使用
```javascript
import Vue from "vue";
import ElementUI from 'element-ui';
import '@femessage/theme-deepexi/lib/index.css';
Vue.use(ElementUI);
```