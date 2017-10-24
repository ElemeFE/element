## 自定义主题
Element 默认提供一套主题，CSS 命名采用 BEM 的风格方便使用者覆盖样式。如果你想完全替换主题色或者部分样式，可以使用下面的方法。

### 仅替换主题色
整理中。

### 深层次的定制
如果仅仅改变主题色不能满足你的需求，请按以下步骤进行更深层次的主题定制：

#### <strong>安装工具</strong>
首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。
```shell
npm i element-theme -g
```

安装白垩主题，可以从 npm 安装或者从 GitHub 拉取最新代码。
```shell
# 从 npm
npm i element-theme-chalk -D

# 从 GitHub
npm i https://github.com/ElementUI/theme-chalk -D
```

#### <strong>初始化变量文件</strong>
主题生成工具安装成功后，如果全局安装可以在命令行里通过 `et` 调用工具，如果安装在当前目录下，需要通过 `node_modules/.bin/et` 访问到命令。执行 `-i` 初始化变量文件。默认输出到 `element-variables.scss`，当然你可以传参数指定文件输出目录。

```shell
et -i [可以自定义变量文件]

> ✔ Generator variables file
```

如果使用默认配置，执行后当前目录会有一个 `element-variables.scss` 文件。内部包含了主题所用到的所有变量，它们使用 SCSS 的格式定义。大致结构如下：
```css
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%); /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%); /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%); /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%); /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%); /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%); /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%); /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%); /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%); /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #eb9e05 !default;
$--color-danger: #fa5555 !default;
$--color-info: #878d99 !default;
```

#### <strong>修改变量</strong>
直接编辑 `element-variables.scss` 文件，例如修改主题色为红色。
```CSS
$--color-primary: red;
```

#### <strong>编译主题</strong>
保存文件后，到命令行里执行 `et` 编译主题，如果你想启用 `watch` 模式，实时编译主题，增加 `-w` 参数；如果你在初始化时指定了自定义变量文件，则需要增加 `-c` 参数，并带上你的变量文件名
```shell
et

> ✔ build theme font
> ✔ build element theme
```

#### <strong>引入自定义主题</strong>
默认情况下编译的主题目录是放在 `./theme` 下，你可以通过 `-o` 参数指定打包目录。像引入默认主题一样，在代码里直接引用 `theme/index.css` 文件即可。

```javascript
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

#### <strong>搭配插件按需引入组件主题</strong>
如果是搭配 `babel-plugin-component` 一起使用，只需要修改 `.babelrc` 的配置，指定 `styleLibraryName` 路径为自定义主题相对于 `.babelrc` 的路径，注意要加 `~`。
```json
{
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "~theme"
    }
  ]]]
}
```

如果不清楚 `babel-plugin-component` 是什么，请阅读 <a href="./#/zh-CN/component/quickstart">快速上手</a> 一节。更多 `element-theme` 用法请参考[项目仓库](https://github.com/ElementUI/element-theme)。