## Collapse

内容を格納しておくには、コラプスを使用します。

### 基本的な使い方

複数のパネルを展開することができます

:::demo
```html
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
:::

### アコーディオン

アコーディオンモードでは、一度に1つのパネルだけを拡大することができます。

:::demo アコーディオンモードを `accordion` アトリビュートを使って起動します。
```html
<el-collapse v-model="activeName" accordion>
  <el-collapse-item title="Consistency" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
```
:::

### カスタムタイトル

`title`属性を使う以外にも、名前付きスロットを使ってパネルのタイトルをカスタマイズすることができ、アイコンなどのカスタムコンテンツを追加することができます。

:::demo
```html
<el-collapse accordion>
  <el-collapse-item name="1">
    <template slot="title">
      Consistency<i class="header-icon el-icon-info"></i>
    </template>
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficiency" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllability" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
```
:::

### Collapse属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | カレントアクティブパネル | string (accordion mode) / array (non-accordion mode) | — | — |
| accordion | アコーディオンモードにするかどうか | boolean | — | false |

### Collapseイベント
| Event Name | Description | Parameters |
|---------|---------|---------|
| change | アクティブなパネルが変更されたときにトリガされます。 | (activeNames: array (non-accordion mode) / string (accordion mode)) |

### Collapseアイテム属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name      | パネル固有の識別 | string/number | — | — |
| title     | パネルのタイトル                 | string        | — | — |
| disabled  | collapseアイテムを無効にする          | boolean       | — | — |
