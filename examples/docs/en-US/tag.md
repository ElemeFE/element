<script>
  export default {
    data() {
      return {
        tags: [
          { key: 1, name: 'Tag one', type: '' },
          { key: 2, name: 'Tag Two', type: 'gray' },
          { key: 5, name: 'Tag Three', type: 'primary' },
          { key: 3, name: 'Tag Four', type: 'success' },
          { key: 4, name: 'Tag Five', type: 'warning' },
          { key: 6, name: 'Tag Six', type: 'danger' }
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

:::demo Set the `closable` attribute to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `close-transition` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.

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
          { key: 1, name: 'Tag One', type: '' },
          { key: 2, name: 'Tag Two', type: 'gray' },
          { key: 5, name: 'Tag Three', type: 'primary' },
          { key: 3, name: 'Tag Four', type: 'success' },
          { key: 4, name: 'Tag Five', type: 'warning' },
          { key: 6, name: 'Tag Six', type: 'danger' }
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