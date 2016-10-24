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

Show animation while loading the data.

### Local loading

Show animation while some containers such a `table` is loading the data.

In loading component, we use customizable attribute `v-loading`. You just need to bind a `boolean` value to this component. By default, loading mask layer will insert into the childnode. Loading mask layer can be inserted into body element of DOM by adding `body` modifier.

:::demo

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

### Global loading

Show animation while the page is loading the data, and in this case mask layer will insert into the `body` of document.  

You just need to use `.fullscreen` modifier and then create a global mask layer and it will insert at `body` automatically.

:::demo

```html
<template>
  <el-button
    type="primary"
    @click.native="openFullScreen"
    v-loading.fullscreen="fullscreenLoading">
    show animation in whole page，and will disappear after 3s
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

