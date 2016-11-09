<script>
  module.exports = {
    methods: {
      open() {
        this.$notify({
          title: 'Title',
          message: 'This is a reminder'
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      },

      open3() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open6() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      },

      onClose() {
        console.log('Notification is closed');
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

Displays a global notification message at the upper right corner of the page.

### Basic usage

::: demo Element has registered the `$notify` method and it receives an object as its parameter. In the simplest case, you can set the `title` field and the` message` field for the title and body of the notification. By default, the notification automatically closes after 4500ms, but by setting `duration` you can control its duration. Specifically, if set to `0`, it will not close automatically. Note that `duration` receives a `Number` in milliseconds.
   
```html
<template>
  <el-button
    plain
    @click.native="open">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click.native="open2">
    Won't close automatically
    </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'Title',
          message: 'This is a reminder'
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
</script>
```
:::

### With types

We provide four types: success, warning, info and error.

::: demo Element provides four notification types: `success`, `warning`, `info` and `error`. They are set by the `type` field, and other values will be ignored. We also registered methods for these types that can be invoked directly like `open5` and `open6` without passing a `type` field.
```html
<template>
  <el-button
    plain
    @click.native="open3">
    Success
  </el-button>
  <el-button
    plain
    @click.native="open4">
    Warning
  </el-button>
  <el-button
    plain
    @click.native="open5">
    Info
  </el-button>
  <el-button
    plain
    @click.native="open6">
    Error
  </el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open6() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
```
:::

### Global method

Element has added a global method `$notify` for Vue.prototype. So in a vue instance you can call `Notification` like what we did in this page.

### Local import

Import `Notification`:

```javascript
import { Notification } from 'element-ui';
```

In this case you should call `Notification(options)`. We have also registered methods for different types, e.g. `Notification.success(options)`.

### Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title | string | — | — |
| message | description text | string | — | — |
| type | notification type | string | success/warning/info/error | — |
| duration | duration before close. It will not automatically close if set 0 | number | — | 4500 |
| onClose | callback function when closed | function | — | — |

