<script>
  module.exports = {
    data() {
      return {
        options: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
            }],
          }, {
            value: 'ningbo',
            label: 'NingBo',
            children: [{
              value: 'jiangbei',
              label: 'Jiang Bei',
            }],
          }],
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            }],
          }],
        }],
        selectedOptions: [],
        selectedOptions2: ['jiangsu', 'nanjing', 'zhonghuamen'],
        selectedOptions3: [],
        selectedOptions4: [],
        selectedOptions5: []
      };
    },
    methods: {
    }
  };
</script>

## 级联选择

需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。

从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。

### 基本使用

:::demo
```html
<el-cascader
  :options="options"
  v-model="selectedOptions"
></el-cascader>
```
:::

### 默认值

:::demo
```html
<el-cascader
  :options="options"
  v-model="selectedOptions2"
></el-cascader>
```
:::

### 移入展开

:::demo
```html
<el-cascader
  :options="options"
  v-model="selectedOptions3"
  expand-trigger="hover"
></el-cascader>
```
:::

### 选择即改变

:::demo
```html
<el-cascader
  :options="options"
  v-model="selectedOptions4"
  change-on-select
></el-cascader>
```
:::

### 可搜索

:::demo
```html
<el-cascader
  :options="options"
  v-model="selectedOptions5"
  show-search
></el-cascader>
```
:::