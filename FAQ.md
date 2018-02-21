## FAQ

<details>
  <summary>Why are my event listeners not working?</summary>
  
  In Vue 2.0, adding **native** event handlers in **custom** components requires a `.native` modifier:
  ```html
  <my-component @click.native="handleClick">Click Me</my-component>
  ```
  
  For the sake of usability, we processed `Button` so it can listen to `click` events:
  ```html
  <tm-button @click="handleButtonClick">Click Me</tm-button>
  ```
  
  For other components, the `.native` modifier is still mandatory.
</details>

<details>
  <summary>How do I add buttons in each row of Table to operate data of that row?</summary>
  
  Just use [Scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots):
  ```html
  <tm-table-column label="Operations">
    <template slot-scope="props">
      <tm-button @click.native="showDetail(props.row)">Details</tm-button>
    </template>
  </tm-table-column>
  ```
  The parameter `row` is the data object of corresponding row.
</details>

<details>
  <summary>How do `render-content` of Tree and `render-header` of Table work?</summary>
  
  Please refer to [Render Function](http://vuejs.org/v2/guide/render-function.html) in Vue's documentation. In addition, if you are writing render functions with JSX, `babel-plugin-transform-vue-jsx` is required. See [here](https://github.com/vuejs/babel-plugin-transform-vue-jsx) for its configurations.
</details>

<details>
  <summary>Can I use `.sync` modifier on every attribute?</summary>
  
  No, only a few attributes supports the `.sync` modifier, and we have explicitly marked them on the documentation's API table. For more information about `.sync`, please refer to [Vue documentation](https://vuejs.org/v2/guide/components.html#sync-Modifier).
</details>

<details>
  <summary>When do you update documentations of TM-Ui?</summary>
  
  We update documentations only when a new version of TM-Ui is published so that it reflects all the changes introduced in that version. Updated changed can be found in the [changelog](https://github.com/tmconsulting/tmc24-components/blob/dev/CHANGELOG.md)。
</details>

<details>
  <summary>I imported TM-Ui in my project, but why does it report CSS error/font file error/components have no style?</summary>
  
  Please refer to our [starter kit](https://github.com/ElementUI/element-starter) and correctly configure file-loader, css-loader and style-loader in webpack config file. Besides, we also provide templated based on [cooking](https://github.com/ElementUI/element-cooking-starter) and [laravel](https://github.com/ElementUI/element-in-laravel-starter).
</details>

<details>
  <summary>I cloned TM-Ui's repo, but failed to run it. How do I solve it?</summary>
  
  First, please make sure to clone the latest code in master branch and cloned files are intact. Then, note that the version of Nodejs should be 4.0+ and npm 3.0+. Finally, activate development:
  
  ```bash
  npm run dev
  ```
  
  or build it:
  
  ```bash
  npm run dist
  ```
</details>