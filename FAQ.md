## FAQ

### 给组件绑定的事件为什么无法触发？

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：
```html
<el-button @click.native="handleButtonClick">Click Me</el-button>
```

### 如何在 Table 组件的每一行添加操作该行数据的按钮？

使用 inline-template 即可：
```html
<el-table-column label="操作" inline-template>
  <el-button @click.native="showDetail(row)">查看详情</el-button>
</el-table-column>
```
参数 `row` 即为对应行的数据。

### 你们的文档怎么偷偷更新了？

我们只会在 Element 发布新版本时同步更新文档，以体现最新的变化。详细的更新内容可以查看 [changelog](https://github.com/ElemeFE/element/blob/master/CHANGELOG.md)。

### 在项目中引入 Element，但是 CSS 报错/字体文件报错/组件没有样式是什么原因？

请参考我们提供的 [starter kit](https://github.com/ElementUI/element-starter)，在 webpack 的 loaders 中正确配置 file-loader、css-loader 和 style-loader。此外，我们还提供了基于 [cooking](https://github.com/ElementUI/element-cooking-starter) 和 [laravel](https://github.com/ElementUI/element-in-laravel-starter) 的项目模板。

### 在项目中引入 Element，报 `Uncaught Error: Module build failed: SyntaxError: 'with' in strict mode` 是什么原因？

请避免你使用的编译器处理 Element。比如，若是使用 webpack，请在 loaders 中配置：
```javascript
{
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/
}
```

### 将 Element 克隆至本地，运行时为何会报错/跑不起来？

首先，确保克隆的是 master 分支的最新代码，并且文件完整。其次，确保本地的 node 版本在 4.0 以上，npm 版本在 3.0 以上。最后，可以启动开发环境：

```bash
npm run dev
```

或是直接打包：

```bash
npm run dist
```
