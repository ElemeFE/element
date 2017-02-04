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
              label: 'West Lake'
            }]
          }, {
            value: 'ningbo',
            label: 'NingBo',
            children: [{
              value: 'jiangbei',
              label: 'Jiang Bei'
            }]
          }]
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }]
          }]
        }],
        optionsWithDisabled: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          disabled: true,
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake'
            }]
          }, {
            value: 'ningbo',
            label: 'NingBo',
            children: [{
              value: 'jiangbei',
              label: 'Jiang Bei'
            }]
          }]
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }]
          }]
        }],
        selectedOptions: [],
        selectedOptions2: ['jiangsu', 'nanjing', 'zhonghuamen']
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .demo-cascader {
    .el-cascader {
      width: 222px;
    }
  }
  .demo-cascader-size {
    .el-cascader {
      vertical-align: top;
      margin-right: 15px;
    }
  }
</style>

## 级联选择

需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。

从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。

### 基本使用

:::demo
```html
<el-cascader
  placeholder="请选择"
  :options="options"
  v-model="selectedOptions"
  @change="handleChange"
></el-cascader>
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
        selectedOptions: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项时禁用的

:::demo
```html
<el-cascader
  placeholder="请选择"
  :options="optionsWithDisabled"
></el-cascader>
<script>
  module.exports = {
    data() {
      return {
        optionsWithDisabled: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          disabled: true,
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
        }]
      };
    }
  };
</script>
```
:::

### 默认值

:::demo 默认值通过数组的方式指定。
```html
<el-cascader
  placeholder="请选择"
  :options="options"
  v-model="selectedOptions2"
></el-cascader>
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
        selectedOptions2: ['jiangsu', 'nanjing', 'zhonghuamen']
      };
    }
  };
</script>
```
:::

### 尺寸

:::demo 提供三种尺寸的级联选择器
```html
<div class="demo-cascader-size">
  <el-cascader
    placeholder="请选择"
    :options="options"
    size="large"
  ></el-cascader>
  <el-cascader
    placeholder="请选择"
    :options="options"
  ></el-cascader>
  <el-cascader
    placeholder="请选择"
    :options="options"
    size="small"
  ></el-cascader>
</div>
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
        }]
      };
    }
  };
</script>
```
:::

### 移入展开

在鼠标移入时就展开下级菜单，完成选择仍需要进行点击。

:::demo
```html
<el-cascader
  placeholder="请选择"
  :options="options"
  expand-trigger="hover"
></el-cascader>
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
        }]
      };
    }
  };
</script>
```
:::

### 选择即改变

该模式下允许只选中父级选项。

:::demo
```html
<el-cascader
  placeholder="请选择"
  :options="options"
  change-on-select
></el-cascader>
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
        }]
      };
    }
  };
</script>
```
:::

### 可搜索

可以直接搜索选项并选择。

:::demo
```html
<el-cascader
  placeholder="请选择"
  :options="options"
  filterable
></el-cascader>
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
        }]
      };
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 可选项数据源 | array  |       —        |     —    |
| value | 指定选中项   | array | — |     —    |
| popper-class | 自定义浮层类名   | string |      —         |     —    |
| placeholder | 输入框占位文本 | string    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| clearable  | 是否支持清除    | boolean   |  — | false   |
| expand-trigger  | 次级菜单的展开方式 | string | click / hover | 'click'   |
| filterable  | 是否支持搜索选项 | boolean | — | — |
| size  | 尺寸 | string | large / small / mini | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 当前值 |