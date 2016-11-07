<style>
  .el-loading-demo {
    border: solid 1px #999;
    border-radius: 4px;
    height: 100px;
  }
</style>

<script>
  export default {
    data() {
      return {
        loading: true,
        loading2: false,
        fullscreenLoading: false
      }
    },

    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>

## Loading

Show animation while loading data.

### Loading inside a container

Displays animation in a container (such as a table) while loading data.

:::demo We provide a custom directive `v-loading`. You just need to bind a `boolean` value to it. By default, the loading mask will append to the element where the directive is used. Adding the `body` modifier makes the mask append to the body element.

```html
<template>
  <div v-loading="loading" class="el-loading-demo"></div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      };
    }
  };
</script>
```
:::

### Full screen loading

Show a full screen animation while loading data.  

:::demo Add the `fullscreen` modifier to create a full screen mask, and it will append to body. In this case, if you disable scrolling on body, you add another modifier `lock`.

```html
<template>
  <el-button
    type="primary"
    @click.native="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    Full screen loading for 3 seconds
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    }
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>
```
:::

