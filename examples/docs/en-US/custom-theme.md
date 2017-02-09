## Custom theme
Element uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea, and this is where our theme customization tools kick in.

## Changing theme color
If you just want to change the theme color of Element, the [theme preview website](https://elementui.github.io/theme-preview/#/en-US) is recommended.

The main color of Element is bright and friendly blue. By changing it, you can make Element more visually connected to specific projects.

The above website enables you to preview theme of a new theme color in real-time, and it can generate a complete style package based on the new theme color for you to download directly (to import new style files in your project, please refer to the 'Import custom theme' or 'Import component theme on demand' part of this section).

## More customizations
If you need more customization than just changing the theme color, please follow these steps:

### Install related tool
First install the theme generator globally or locally. Local install is recommended because in this way, when others clone your project, npm will automatically install it for them.
```shell
npm i element-theme -g
```

Then install the default theme from npm or GitHub.
```shell
# from npm
npm i element-theme-default -D

# from GitHub
npm i https://github.com/ElementUI/theme-default -D
```

### Initialize variable file
After successfully installing the above packages, a command named `et` is available in CLI (if the packages are installed locally, use `node_modules/.bin/et` instead). Run `-i` to initialize the variable file which outputs to `element-variables.css` by default. And you can specify its output directory as you will.

```shell
et -i [custom output file]

> ✔ Generator variables file
```

In `element-variables.css` you can find all the variables we used to style Element and they are defined in CSS4 style:
```css
:root {

  /* Colors
  -------------------------- */
  --color-primary: #20a0ff;
  --color-success: #13ce66;
  --color-warning: #f7ba2a;
  --color-danger: #ff4949;
  --color-info: #50BFFF;
  --color-blue: #2e90fe;
  --color-blue-light: #5da9ff;
  --color-blue-lighter: rgba(var(--color-blue), 0.12);
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #C0CCDA;
```

### Modify variables
Just edit `element-variables.css`, e.g. changing the theme color to red:
```CSS
--color-primary: red;
```

### Build theme
After saving the variable file, use `et` to build your theme. You can activate `watch` mode by adding a parameter `-w`. And if you customized the variable file's output, you need to add a parameter `-c` and variable file's name:
```shell
et

> ✔ build theme font
> ✔ build element theme
```

### Import custom theme
By default the build theme file is placed inside `./theme`. You can specify its output directory with parameter `-o`. Importing your own theme is just like importing the default theme, only this time you import the file you just built:

```javascript
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

### Import component theme on demand
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
