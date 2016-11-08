<script>
  export default {
    methods: {
      open() {
        this.$alert('This is a piece of content', 'Title name');
      },

      open2() {
        this.$confirm('This action will permanently delete the file. continue?', 'Tips', {
          type: 'warning'
        }).then(() => {
          setTimeout(() => {
            this.$message({
              message: 'Operation done',
              type: 'success'
            });
          }, 200);
        }).catch(() => {
          setTimeout(() => {
            this.$message({
              message: 'Operation canceled',
              type: 'info'
            });  
          }, 200);
        });
      },

      open3() {
        this.$prompt('Please input your email', 'Tips', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Email format is incorrect'
        }).then(({ value }) => {
          setTimeout(() => {
            this.$message({
              type: 'success',
              message: 'Your email is:' + value
            });
          }, 200);
        }).catch(() => {
          setTimeout(() => {
            this.$message({
              type: 'info',
              message: 'Cancel input'
            });
          }, 200);
        });
      },

      open4() {
        this.$msgbox({
          title: 'Message',
          message: 'This is a piece of content',
          showCancelButton: true
        }).then(action => {
          setTimeout(() => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          }, 200);
        });
      }

    }
  };
</script>

## Message box

A set of modal dialog box components by simulating the system message box, mainly for the message prompt, success tips, error messages and query information.

### Message prompt

It is triggered when there is user operation, The dialog box interrupts the user operation until the user confirms.

:::demo Open a message prompt by calling the `$alert` method, It simulates the system's `alert`, and can not be closed by pressing ESC or clicking outside the box. In this example, two attributes `message` and `title` were received. It is worth mentioning that when the window is closed, it returns a `Promise` object for subsequent processing.

```html
<template>
  <el-button type="text" @click.native="open">Click to open the Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('This is a piece of content', 'Title name');
      }
    }
  }
</script>
```

:::

### Confirm the message

The dailog will be used when Prompts the user to confirm the action that he/she have triggered, and asks if he/she want to do it.

:::demo Call `$confirm` method to open the confirm message prompt, it simulates the System's `confirm`. We can also highly customized the Message Box component by importing the third attribute `options` (ps: it is a literal object). The attribute `type` indicates the message type, it's value can be `success`, `error`, `info` and `warning`, and invalid settings will be ignored. You should notice that the second attribute `title` must be defined as `String` type, if defined as `Object`, it will be hanlded as the attribute `options`. Here we use Promise to handle the subsequent response. 

```html
<template>
  <el-button type="text" @click.native="open2">Click to open the Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open2() {
        this.$confirm('This action will permanently delete the file. Do you want to continue?', 'Tips', {
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Operation done!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Operation canceled'
          });          
        });
      }
    }
  }
</script>
```

:::

### Submit content

The dailog that triggered when user operates, it will interrupts the user operation and prompts the user to carry on the input.

:::demo Call `$prompt` method to open message prompt, it simulates the System's `prompt`. You can use `inputPattern` attribute to specifies your own match pattern, or use `inputValidator` to specifies the check function, the return value type of the function can be `Boolean` or `String`, `false` as `Boolean` or value as `String` indicates that the check has not passed, and value as `String`
 is the same to the definition of `inputErrorMessage` attribute. 
In addition, You can define the placeholder of the input box with `inputPlaceholder` attribute.

```html
<template>
  <el-button type="text" @click.native="open3">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$prompt('Please input your e-mail', 'tips', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'E-mail format is incorrect'
        }).then(value => {
          this.$message({
            type: 'success',
            message: 'Your e-mail: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Cancel input'
          });       
        });
      }
    }
  }
</script>
```

:::

### Customization

Can be customized to show various content.

:::demo The methods mentioned above are repackagings of the `$msgbox` method. and this example calls `$msgbox` method directly, it uses the `showCancelButton` attribute, which is used to display cancel button. besides we can use `cancelButtonClass` to add a custom style and `cancelButtonText` to customize the button text for it, The Confirm button also has the same fields, and a complete list of fields is provided in the field descriptions at the end of the text.

```html
<template>
  <el-button type="text" @click.native="open4">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open4() {
        this.$msgbox({
          title: 'message',
          message: 'this is a piece of content',
          showCancelButton: true
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }
</script>
```
:::

### Gloable methods

Element has added following gloable methods for Vue.prototype：$msgbox, $alert, $confirm and $prompt. Therefore, We can use Notification as we did in this page in the vue instance.

### References separately

References `MessageBox` separately:

```javascript
import { MessageBox } from 'element-ui';
```

The calling methods corresponding to the above four global methods are: MessageBox, MessageBox.alert, MessageBox.confirm and  MessageBox.prompt。

### Options

| Attribute      | Description          | Type      | Options                         | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | The title of the MessageBox | string | — | — |
| message | The content of the MessageBox | string | — | — |
| type | Message type, Used to display icons | string | success/info/<br>warning/error | — |
| showCancelButton | Whether to show cancel button | boolean | — | false（true when called as confirm and  prompt type） |
| showConfirmButton | Whether to show confirm button | boolean | — | true |
| cancelButtonText | Text content of cancel button | string | — | cancel |
| confirmButtonText | Text content of confirm button | string | — | confirm |
| cancelButtonClass | Customized class name for the cancel button | string | — | — |
| confirmButtonClass | Customized class name for the confirm button | string | — | — |
| showInput | Whether to show input box | boolean | — | false（true when called as prompt type）|
| inputPlaceholder | placeholder of input box | string | — | — |
| inputPattern | regex of the input box | regexp | — | — |
| inputValidator | Validate function for the input box. it can returns a boolean value or String value, The result will be assigned to  inputErrorMessage if it returns a String value| function | — | — |
| inputErrorMessage | Prompt text when validation fails | string | — | Invalid input! |