<script>
  module.exports = {
    methods: {
      open() {
        this.$notify({
          title: 'Title name',
          message: 'This is a reminder'
        });
      },

      open2() {
        this.$notify({
          title: 'prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      },

      open3() {
        this.$notify({
          title: 'success',
          message: 'This is a successful prompt message',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: 'warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'message',
          message: 'This is a message prompt message'
        });
      },

      open6() {
        this.$notify.error({
          title: 'error',
          message: 'This is an error message'
        });
      },

      onClose() {
        console.log('Notification Has been closed');
      }
    }
  };
</script>

<style>
  .demo-box.demo-notification {
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
</style>

## Notification 

Displays the global notification alert message that is suspended in the upper right corner of the page.

### How to use

Notification that can be used widely.

::: demo The component provides notification functionality. Element registers the `$notify` method and receives a` options` literal attribute. In the simplest case, you can set the `title` field and the` message` field to set the title and body of the notification. By default, the notification component will automatically shut down after a period of time, but by setting `duration`, you can control the time interval for shutting down. Specifically, if set to` 0`, it will not automatically shut down. Note: `duration` receives a` Number` in milliseconds and defaults to `4500`.
   
```html
<template>
  <el-button
    plain
    @click.native="open">
    Can be automatically shut down
  </el-button>
  <el-button
    plain
    @click.native="open2">
    Can not be automatically shut down
    </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'Title name',
          message: 'This is a reminder'
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that will not automatically close.',
          duration: 0
        });
      }
    }
  }
</script>
```
:::

### With tendencies

Usually it is used to display the system messages, such as "success, warning, message and error".

::: demo The Element provides four notification types for the Notification component: `success`, `warning`, `info` and `error`. They are set by the `type` field, and other values will be ignored. We also register methods for the various types of notifications that can be invoked directly like `open5` and` open6` without passing a `type` field.

```html
<template>
  <el-button
    plain
    @click.native="open3">
    success
  </el-button>
  <el-button
    plain
    @click.native="open4">
    warning
  </el-button>
  <el-button
    plain
    @click.native="open5">
    message
  </el-button>
  <el-button
    plain
    @click.native="open6">
    error
  </el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$notify({
          title: 'success',
          message: 'This is a successful prompt message',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: 'warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'message',
          message: 'This is a message prompt message'
        });
      },

      open6() {
        this.$notify.error({
          title: 'error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
```
:::

### The global method

Element provides a global method `$notify` for ` Vue.prototype`. Therefore, we can use Notification as we did in this page in the vue instance.

### References separately

References notification separately：

```javascript
import { Notification } from 'element-ui';
```

In this case the method is `Notification(options)`. We also define the methods for each type，such as `Notification.success(options)`.

### Options
| Attribute      | Description          | Type      | Options                          | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title | string | — | — |
| message | Description text | string | — | — |
| type | The theme style, if not within the optional value, will be ignored | string | success/warning/info/error | — |
| duration | Displays the time in milliseconds. It will not automatically shut down if set 0 | number | — | 4500 |
| onClose | The callback function when closed | function | — | — |

