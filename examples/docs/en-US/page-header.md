## PageHeader

If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.

### Basic

:::demo
```html
<el-page-header @back="goBack" title="back" sub-title="detail">
</el-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
```
:::

### Attributes
| Attribute | Description   | Type      | Accepted Values               | Default |
|---------- |-------------- |---------- |------------------------------ | ------ |
| title     | main title    | string    |  —                            | back   |
| sub-title | sub title     | string    |  —                            | —      |

### Events
| Event Name | Description   | Parameters |
|----------- |-------------- |----------- |
| back       | triggers when right side is clicked | — |

### Slots
| slot      | Description            |
|---------- | ---------------------- |
| title     | title content          |
| subTitle  | sub title content      |
