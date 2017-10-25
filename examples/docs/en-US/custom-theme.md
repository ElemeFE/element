## Custom theme
Element uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide three ways to change the style variables.

### Changing theme color
If you just want to change the theme color of Element, the [theme preview website](https://elementui.github.io/theme-chalk-preview/#/en-US) is recommended. The theme color of Element is bright and friendly blue. By changing it, you can make Element more visually connected to specific projects.

The above website enables you to preview theme of a new theme color in real-time, and it can generate a complete style package based on the new theme color for you to download directly (to import new style files in your project, please refer to the 'Import custom theme' or 'Import component theme on demand' part of this section).

### Update SCSS variables in your project
`theme-chalk` is written in SCSS. If your project also uses SCSS, you can directly change Element style variables. Create a new style file, e.g. `element-variables.scss`:

```html
/* theme color */
$--color-primary: teal;

/* icon font path, required */
$--font-path: '../node_modules/element-ui/lib/theme-chalk/fonts';

@import "../node_modules/element-ui/packages/theme-chalk/src/index";
```

Then in the entry file of your project, import this style file instead of Element's built CSS:
```JS
import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'

Vue.use(Element)
```

Note that it is required to override icon font path to the relative path of Element's font files. You can edit the following variables in this way:

| Variable | Description | Default value |
| ------ | ---- | ------ |
| $--sm | `sm` breakpoint for responsive layout | 768px |
| $--md | `md` breakpoint for responsive layout | 992px |
| $--lg | `lg` breakpoint for responsive layout | 1200px |
| $--xl | `xl` breakpoint for responsive layout | 1920px |
| $--color-primary | theme color | #409EFF |
| $--color-success | color for success | #67C23A |
| $--color-warning | color for warning | #EB9E05 |
| $--color-danger | color for danger | #FA5555 |
| $--color-info | color for info | #878D99 |
| $--color-text-primary | color for primary texts | #2D2F33 |
| $--color-text-regular | color for regular texts | #5A5E66 |
| $--color-text-secondary | color for secondary texts | #878D99 |
| $--color-text-placeholder | color for placeholder texts | #B4BCCC |
| $--border-color-base | base border color | #D8DCE5 |
| $--border-color-light | light border color | #DFE4ED |
| $--border-color-lighter | lighter border color | #E6EBF5 |
| $--border-color-extra-light | extra light border color | #EDF2FC |
| $--font-path | icon font file path | 'fonts' |

### More customizations
If you need more customization than just changing the theme color, please follow these steps:

#### <strong>Install related tool</strong>
First install the theme generator globally or locally. Local install is recommended because in this way, when others clone your project, npm will automatically install it for them.
```shell
npm i element-theme -g
```

Then install the chalk theme from npm or GitHub.
```shell
# from npm
npm i element-theme-chalk -D

# from GitHub
npm i https://github.com/ElementUI/theme-chalk -D
```

#### <strong>Initialize variable file</strong>
After successfully installing the above packages, a command named `et` is available in CLI (if the packages are installed locally, use `node_modules/.bin/et` instead). Run `-i` to initialize the variable file which outputs to `element-variables.scss` by default. And you can specify its output directory as you will.

```shell
et -i [custom output file]

> ✔ Generator variables file
```

In `element-variables.scss` you can find all the variables we used to style Element and they are defined in SCSS format:
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

#### <strong>Modify variables</strong>
Just edit `element-variables.scss`, e.g. changing the theme color to red:
```CSS
$--color-primary: red;
```

#### <strong>Build theme</strong>
After saving the variable file, use `et` to build your theme. You can activate `watch` mode by adding a parameter `-w`. And if you customized the variable file's output, you need to add a parameter `-c` and variable file's name:
```shell
et

> ✔ build theme font
> ✔ build element theme
```

#### <strong>Import custom theme</strong>
By default the build theme file is placed inside `./theme`. You can specify its output directory with parameter `-o`. Importing your own theme is just like importing the default theme, only this time you import the file you just built:

```javascript
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

#### <strong>Import component theme on demand</strong>
If you are using `babel-plugin-component` for on-demand import, just modify `.babelrc` and specify `styleLibraryName` to the path where your custom theme is located relative to `.babelrc`. Note that `~` is required:
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

If you are unfamiliar with `babel-plugin-component`, please refer to <a href="./#/en-US/component/quickstart">Quick Start</a>. For more details, check out the [project repository](https://github.com/ElementUI/element-theme) of `element-theme`.