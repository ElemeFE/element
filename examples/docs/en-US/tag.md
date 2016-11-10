<script>
  export default {
    data() {
      return {
        tags: [
          { key: 1, name: 'Label one', type: '' },
          { key: 2, name: 'Label Two', type: 'gray' },
          { key: 5, name: 'Label Three', type: 'primary' },
          { key: 3, name: 'Label Four', type: 'success' },
          { key: 4, name: 'Label Five', type: 'warning' },
          { key: 6, name: 'Label Six', type: 'danger' }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      }
    }
  }
</script>

<style>
  .demo-box.demo-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
  }
</style>

## Tag

Used for marking and selection.

### How to use

::: demo It's defined by the `type` attribute, which is optional.

```html
<el-tag>Label One</el-tag>
<el-tag type="gray">Label Two</el-tag>
<el-tag type="primary">Label Three</el-tag>
<el-tag type="success">Label Four</el-tag>
<el-tag type="warning">Label Five</el-tag>
<el-tag type="danger">Label Six</el-tag>
```
:::

### Removable Label

:::demo Set the `closable` attribute to define a removeable tag, it can accepts a `Boolean` and you can set it with `true`. The removal of default label is accompanied by a gradient animation. If you don't want to use it, you can set the `close-transition` attribute, it accepts a `Boolean`, and will be turn off if set true. Setting the `close` event to handle the callback function after closing.

```html
<el-tag
  v-for="tag in tags"
  :closable="true"
  :type="tag.type"
  :key="tag"
  :close-transition="false"
  @close="handleClose(tag)"
>
{{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { key: 1, name: 'Label One', type: '' },
          { key: 2, name: 'Label Two', type: 'gray' },
          { key: 5, name: 'Label Three', type: 'primary' },
          { key: 3, name: 'Label Four', type: 'success' },
          { key: 4, name: 'Label Five', type: 'warning' },
          { key: 6, name: 'Label Six', type: 'danger' }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      }
    }
  }
</script>
```
:::

### Attributes
| Parameter      | Description          | Type      | Options                          | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | theme | string | 'primary', 'gray', 'success', 'warning', 'danger' | — |
| closable | Whether it can be closed | boolean | — | false |
| close-transition | Whether gradient animation is disabled or not | boolean | — | false |
| hit | Is there a border stroke| boolean | — | false |


### Events
| Event | Description | Callback |
|---------- |-------- |---------- |
| close | The event fired when the tab is closed | — |