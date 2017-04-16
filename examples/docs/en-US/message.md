<script>
  module.exports = {
    methods: {
      open() {
        this.$message('This is a message.');
      },

      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      },

      open5() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  };
</script>

## Message

Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification.

### Basic usage

Displays at the top, and disappears after 3 seconds.

:::demo The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below combined with notification doc to understand it. Element has registered a `$message` method for invoking. Message can take a string as parameter, and it will be shown as the main body.

```html
<template>
  <el-button :plain="true" @click="open">Show message</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      }
    }
  }
</script>
```
:::

### Types

Used to show the feedback of Success, Warning, Message and Error activities.

:::demo When you need more customizations, Message component can also take an object as parameter. For example, setting value of `type` can define different types, and its default is `info`. In such cases the main body is passed in as the value of `message`. Also, we have registered methods for different types, so you can directly call it without passing a type like `open4`.
```html
<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    }
  }
</script>
```
:::

### Closable

A close button can be added.

:::demo A default Message cannot be closed manually. If you need a closable message, you can set `showClose` field. Besides, same as notification, message has a controllable `duration`. Default duration is 3000 ms, and it won't disappear when set to `0`.
```html
<template>
  <el-button :plain="true" @click="open5">message</el-button>
  <el-button :plain="true" @click="open6">success</el-button>
  <el-button :plain="true" @click="open7">warning</el-button>
  <el-button :plain="true" @click="open8">error</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  }
</script>
```
:::

### Global method

Element has added a global method `$message` for Vue.prototype. So in a vue instance you can call `Message` like what we did in this page.

### Local import

Import `Message`:

```javascript
import { Message } from 'element-ui';
```

In this case you should call `Message(options)`. We have also registered methods for different types, e.g. `Message.success(options)`.
You can call `Message.closeAll()` to manually close all the instances.

### Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | message text | string | — | — |
| type | message type | string | success/warning/info/error | info |
| iconClass | custom icon's class, overrides `type` | string | — | — |
| customClass | custom class name for Message | string | — | — |
| duration | display duration, millisecond. If set to 0, it will not turn off automatically | number | — | 3000 |
| showClose | whether to show a close button | boolean | — | false |
| onClose | callback function when closed with the message instance as the parameter | function | — | — |

### Methods
`Message` and `this.$message` returns the current Message instance. To manually close the instance, you can call `close` on it.
| Method | Description |
| ---- | ---- |
| close | close the Message |
