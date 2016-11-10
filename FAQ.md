## FAQ

<details>
<summary>给组件绑定的事件为什么无法触发？</summary>

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：
```html
<my-component @click.native="handleClick">Click Me</my-component>
```

从易用性的角度出发，我们对 `Button` 组件进行了处理，使它可以监听 `click` 事件：
```html
<el-button @click="handleButtonClick">Click Me</el-button>
```

但是对于其他组件，还是需要添加 `.native` 修饰符。
</details>

<details>
<summary>如何在 Table 组件的每一行添加操作该行数据的按钮？</summary>

使用 inline-template 即可：
```html
<el-table-column label="操作" inline-template>
  <el-button @click.native="showDetail(row)">查看详情</el-button>
</el-table-column>
```
参数 `row` 即为对应行的数据。
</details>

<details>
<summary>Tree 组件的 `render-content` 和 Table 组件的 `render-header` 怎么用？</summary>

请阅读 Vue 文档 [Render Function](http://vuejs.org/v2/guide/render-function.html) 的相关内容。注意，使用 JSX 来写 Render Function 的话，需要安装 `babel-plugin-transform-vue-jsx`，并参照其[文档](https://github.com/vuejs/babel-plugin-transform-vue-jsx)进行配置。
</details>

<details>
<summary>你们的文档怎么偷偷更新了？</summary>

我们只会在 Element 发布新版本时同步更新文档，以体现最新的变化。详细的更新内容可以查看 [changelog](https://github.com/ElemeFE/element/blob/master/CHANGELOG.md)。
</details>

<details>
<summary>在项目中引入 Element，但是 CSS 报错/字体文件报错/组件没有样式是什么原因？</summary>

请参考我们提供的 [starter kit](https://github.com/ElementUI/element-starter)，在 webpack 的 loaders 中正确配置 file-loader、css-loader 和 style-loader。此外，我们还提供了基于 [cooking](https://github.com/ElementUI/element-cooking-starter) 和 [laravel](https://github.com/ElementUI/element-in-laravel-starter) 的项目模板。
</details>

<details>
<summary>在项目中引入 Element，报 `Uncaught Error: Module build failed: SyntaxError: 'with' in strict mode` 是什么原因？</summary>

请避免你使用的编译器处理 Element。比如，若是使用 webpack，请在 loaders 中配置：
```javascript
{
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/
}
```
</details>

<details>
<summary>将 Element 克隆至本地，运行时为何会报错/跑不起来？</summary>

首先，确保克隆的是 master 分支的最新代码，并且文件完整。其次，确保本地的 node 版本在 4.0 以上，npm 版本在 3.0 以上。最后，可以启动开发环境：

```bash
npm run dev
```

或是直接打包：

```bash
npm run dist
```
</details>
