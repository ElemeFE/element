<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'gray' },
          { name: 'Tag 3', type: 'primary' },
          { name: 'Tag 4', type: 'success' },
          { name: 'Tag 5', type: 'warning' },
          { name: 'Tag 6', type: 'danger' }
        ],
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style>
  .demo-box.demo-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 24px;
      line-height: 22px;
      padding: 0 *;
    }
    .input-new-tag {
      width: 78px;
      margin-left: 10px;
      vertical-align: bottom;

      .el-input__inner {
        height: 24px;
      }
    }
  }
</style>

## Tag

Used for marking and selection.

### Basic usage

::: demo Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.

```html
<el-tag>Tag One</el-tag>
<el-tag type="gray">Tag Two</el-tag>
<el-tag type="primary">Tag Three</el-tag>
<el-tag type="success">Tag Four</el-tag>
<el-tag type="warning">Tag Five</el-tag>
<el-tag type="danger">Tag Six</el-tag>
```
:::

### Removable Tag

:::demo `closable` attribute can be used to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `close-transition` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.

```html
<el-tag
  v-for="tag in tags"
  :key="tag.name"
  :closable="true"
  :type="tag.type"
>
{{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'gray' },
          { name: 'Tag 3', type: 'primary' },
          { name: 'Tag 4', type: 'success' },
          { name: 'Tag 5', type: 'warning' },
          { name: 'Tag 6', type: 'danger' }
        ]
      };
    }
  }
</script>
```
:::

### Edit Dynamically

You can use the `close` event to add and remove tag dynamically.

:::demo
```html
<el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  :closable="true"
  :close-transition="false"
  @close="handleClose(tag)"
>
{{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | theme | string | primary/gray/success/warning/danger | — |
| closable | whether Tab can be removed | boolean | — | false |
| close-transition | whether the removal animation is disabled | boolean | — | false |
| hit | whether Tag has a highlighted border | boolean | — | false |
| color | background color of the tag | string | — | — |


### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | triggers when Tab is removed | — |