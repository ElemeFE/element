## ページヘッダー

ページのパスがシンプルな場合は、パンくず(Breadcrumb)ではなくPageHeaderを使用することをお勧めします。

### 基本

:::demo
```html
<el-page-header @back="goBack" content="detail">
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

### 属性
| Attribute | Description   | Type      | Accepted Values               | Default |
|---------- |-------------- |---------- |------------------------------ | ------ |
| title     | メインタイトル  | string    |  —                            | Back   |
| content   | 内容           | string    |  —                            | —      |

### イベント
| Event Name | Description   | Parameters |
|----------- |-------------- |----------- |
| back       | 右側をクリックするとトリガー | — |

### スロット
| slot      | Description            |
|---------- | ---------------------- |
| title     | タイトル                |
| content   | 内容                    |
