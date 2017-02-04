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

## Cascader

It's used to select from a set of associated data set. Such as province/city/district, company level, and categories.

### Basic usage

:::demo
```html
<el-cascader
  placeholder="Please select"
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

### Disabled option

:::demo
```html
<el-cascader
  placeholder="Please select"
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

### Default Value

:::demo default value is assigned by an array type value.
```html
<el-cascader
  placeholder="Please select"
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

### Size

:::demo
```html
<div class="demo-cascader-size">
  <el-cascader
    placeholder="Please select"
    :options="options"
    size="large"
  ></el-cascader>
  <el-cascader
    placeholder="Please select"
    :options="options"
  ></el-cascader>
  <el-cascader
    placeholder="Please select"
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

### Hover to expand

Hover to expand the next level options, click to select option.

:::demo
```html
<el-cascader
  placeholder="Please select"
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

### Change on select

Allow only select parent options.

:::demo
```html
<el-cascader
  placeholder="Please select"
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

### Search

Search and select options directly.

:::demo
```html
<el-cascader
  placeholder="Please select"
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
| Attribute | Description         | Type    | Options       | Default|
|---------- |-------------------- |---------|-------------  |-------- |
| options   | data source of the options | array  |       —        |     —    |
| value | selected value   | array | — |     —    |
| popper-class | className of popup overlay   | string |      —         |     —    |
| placeholder | input placeholder | string    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| clearable  | whether allow clear    | boolean   |  — | false   |
| expand-trigger  | trigger mode of expandind the current item | string | click / hover | 'click'   |
| filterable  | whether the options can be searched | boolean | — | — |
| size  | size | string | large / small / mini | — |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | value |