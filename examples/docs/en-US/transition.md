## Built-in transition

You can use Element's built-in transitions directly. Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `tm-fade-in-linear` and `tm-fade-in`.
```html
<template>
  <div>
    <tm-button @click="show = !show">Click Me</tm-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="tm-fade-in-linear">
        <div v-show="show" class="transition-box">.tm-fade-in-linear</div>
      </transition>
      <transition name="tm-fade-in">
        <div v-show="show" class="transition-box">.tm-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom

:::demo `tm-zoom-in-center`, `tm-zoom-in-top` and `tm-zoom-in-bottom` are provided.
```html
<template>
  <div>
    <tm-button @click="show2 = !show2">Click Me</tm-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="tm-zoom-in-center">
        <div v-show="show2" class="transition-box">.tm-zoom-in-center</div>
      </transition>

      <transition name="tm-zoom-in-top">
        <div v-show="show2" class="transition-box">.tm-zoom-in-top</div>
      </transition>

      <transition name="tm-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.tm-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse

For collapse effect, use the `tm-collapse-transition` component.

:::demo
```html
<template>
  <div>
    <tm-button @click="show3 = !show3">Click Me</tm-button>

    <div style="margin-top: 20px; height: 200px;">
      <tm-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">tm-collapse-transition</div>
          <div class="transition-box">tm-collapse-transition</div>
        </div>
      </tm-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### On demand

```js
// fade/zoom
import 'tmconsulting-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'tmconsulting-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    margin-right: 20px;
    box-sizing: border-box;
  }
</style>

<script>
  module.exports = {
    data: () => ({
      show: true,
      show2: true,
      show3: true
    })
  }
</script>
