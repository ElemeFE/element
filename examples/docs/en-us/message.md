## Message

Used to show feedback after an activity. The difference with Notification is that later one is often used to show a system level passive notification.

### How to use

Display at the top, and disappear after 3 seconds.

:::demo The setup of Message is very similar to notification, so parts of options won't be explained in detail here. You can check the options table combined with notification doc to understand it. Element has registered a `$message` method to call. Message can take a string as an parameter, and it will be showed as the context.

```html
<template>
  <el-button :plain="true" @click.native="open">Show message</el-button>
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

:::demo When you need more custom types, Message component can also take an instance as a parameter. For example, setting value of `type` can define different types, default is `info`. This time the context is passed in as the value of `message`. Also, we have registered methods for different types, so you can directly call it without passing a type like `open4`.
```html
<template>
  <el-button :plain="true" @click.native="open2">success</el-button>
  <el-button :plain="true" @click.native="open3">warning</el-button>
  <el-button :plain="true" @click.native="open">message</el-button>
  <el-button :plain="true" @click.native="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
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
        this.$message({
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  }
</script>
```
:::

### Closable

Message can add a close button.

:::demo A default Message cannot be closed manually. If you need a closable message, you can set `showClose` field. Besides, same as notification, message has a controllable `duration`. Default duration is 3000 ms, and it won't disappear when set to `0`.
```html
<template>
  <el-button :plain="true" @click.native="open5">message</el-button>
  <el-button :plain="true" @click.native="open6">success</el-button>
  <el-button :plain="true" @click.native="open7">warning</el-button>
  <el-button :plain="true" @click.native="open8">error</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
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

Element has added a global method `$message` for Vue.prototype. So in a vue instance you can call `Message` follows the way in this page.

### Local import

Import `Message`:

```javascript
import { Message } from 'element-ui';
```

This time you should call `Message(options)`.

### Options
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | Message text | string | — | — |
| type | Message type | string | success/warning/info/error | info |
| duration | Display duration, millisecond; If set to 0, it will not turn off automatically | number | — | 3000 |
| showClose | Whether to show close button or not | boolean | — | false |
| onClose | Callback function when closed, the argument is a message instance | function | — | — |
